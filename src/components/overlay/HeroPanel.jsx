import { scrollToSection } from "../../utils/scroll";
import Panel from "./Panel";

export default function HeroPanel({ progress }) {
  return (
    <Panel section="hero" progress={progress} className="hero">
      <div className="eyebrow">Full Stack Developer</div>
      <h1>Ganesh<br />Pendyala</h1>
      <p>I build web products end to end. Scroll to travel through my work.</p>
      <div className="btns">
        <a className="btn fill" onClick={() => scrollToSection("projects")}>View projects</a>
        <a className="btn line" onClick={() => scrollToSection("contact")}>Contact me</a>
      </div>
    </Panel>
  );
}