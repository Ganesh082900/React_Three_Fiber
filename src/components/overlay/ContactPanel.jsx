import { CONTACT_LINKS } from "../../data/contact";
import ContactForm from "./ContactForm";
import Panel from "./Panel";

export default function ContactPanel({ progress }) {
  return (
    <Panel section="contact" progress={progress} className="contact-page">
      <div className="contact-left">
        <h2>Get in touch</h2>
        <p>I'd love to join your team. Send a message and I'll reply as soon as I can.</p>
        {CONTACT_LINKS.map(({ id, label, text, href, external }) => (
          <a
            className="link-row"
            key={id}
            href={href}
            target={external ? "_blank" : undefined}
            rel="noreferrer"
          >
            <span>{label}</span><em>{text}</em>
          </a>
        ))}
      </div>
      <ContactForm />
      <div className="copy">&copy; {new Date().getFullYear()} Ganesh Pendyala. All rights reserved.</div>
    </Panel>
  );
}