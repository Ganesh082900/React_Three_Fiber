import { useState } from "react";
import { CONTACT_API_URL } from "../../data/contact";

const EMPTY_FORM = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("");

  const getFieldProps = (field) => ({
    value: formData[field],
    onChange: (event) => setFormData({ ...formData, [field]: event.target.value }),
    required: true,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setFormData(EMPTY_FORM);
      setStatus("Message sent!");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Could not send. Please try again.");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label>NAME<input {...getFieldProps("name")} /></label>
      <label>EMAIL<input type="email" {...getFieldProps("email")} /></label>
      <label>MESSAGE<textarea rows={4} {...getFieldProps("message")} /></label>
      <div className="btns">
        <button className="btn fill" type="submit">Send message</button>
        <span className="status">{status}</span>
      </div>
    </form>
  );
}