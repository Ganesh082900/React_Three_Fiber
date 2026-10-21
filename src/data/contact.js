export const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "http://localhost:5000/send-email";

export const CONTACT_LINKS = Object.freeze([
  {
    id: "email",
    label: "Email",
    text: "ganeshpendyala2000@gmail.com",
    href: "mailto:ganeshpendyala2000@gmail.com",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    text: "github.com/Ganesh082900",
    href: "https://github.com/Ganesh082900",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    text: "linkedin.com/in/ganesh-pendyala",
    href: "https://www.linkedin.com/in/ganesh-pendyala-7ba5781b8/",
    external: true,
  },
]);