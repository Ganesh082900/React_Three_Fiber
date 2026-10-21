import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";

const { PORT = 5000, CORS_ORIGIN, SMTP_SERVICE = "gmail", SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

const missing = ["CORS_ORIGIN", "SMTP_USER", "SMTP_PASS", "MAIL_TO"].filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const MAX_FIELD_LENGTH = { name: 100, email: 254, message: 5000 };
const RATE_LIMIT = { windowMs: 15 * 60 * 1000, maxRequests: 5 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const transporter = nodemailer.createTransport({
  service: SMTP_SERVICE,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

const requestLog = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT.maxRequests;
};

const validate = (body) => {
  const { name, email, message } = body ?? {};
  const fields = { name, email, message };
  for (const [field, value] of Object.entries(fields)) {
    if (typeof value !== "string" || value.trim() === "") return `${field} is required`;
    if (value.length > MAX_FIELD_LENGTH[field]) return `${field} is too long`;
  }
  if (!EMAIL_PATTERN.test(email)) return "email is invalid";
  return null;
};

// Prevents header injection through line breaks in single-line fields.
const singleLine = (value) => value.replace(/[\r\n]+/g, " ").trim();

const app = express();
app.set("trust proxy", 1);
app.use(cors({ origin: CORS_ORIGIN, methods: ["POST"] }));
app.use(express.json({ limit: "10kb" }));

app.get("/health", (_req, res) => res.sendStatus(200));

app.post("/send-email", async (req, res) => {
  if (isRateLimited(req.ip)) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  const error = validate(req.body);
  if (error) return res.status(400).json({ error });

  const name = singleLine(req.body.name);
  const email = singleLine(req.body.email);

  try {
    await transporter.sendMail({
      from: SMTP_USER,
      to: MAIL_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${req.body.message}`,
    });
    return res.status(200).json({ ok: true });
  } catch (sendError) {
    console.error("Error sending email:", sendError);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Contact server listening on http://localhost:${PORT}`);
});