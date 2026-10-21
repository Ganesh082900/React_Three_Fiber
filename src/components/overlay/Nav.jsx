import { NAV_SECTIONS } from "../../config/scroll";
import { scrollToSection } from "../../utils/scroll";

export default function Nav({ currentSection }) {
  return (
    <div className="nav">
      <a className="logo" onClick={() => scrollToSection("hero")}>GP</a>
      <nav>
        {NAV_SECTIONS.map((section) => (
          <a
            key={section}
            className={currentSection === section ? "on" : ""}
            onClick={() => scrollToSection(section)}
          >
            {section.toUpperCase()}
          </a>
        ))}
      </nav>
    </div>
  );
}