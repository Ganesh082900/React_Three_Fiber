import { getNearestSection, getSectionOpacity } from "../../utils/scroll";
import AboutPanel from "./AboutPanel";
import ContactPanel from "./ContactPanel";
import HeroPanel from "./HeroPanel";
import Nav from "./Nav";
import ProgressMeter from "./ProgressMeter";
import ProjectsPanel from "./ProjectsPanel";
import SkillsPanel from "./SkillsPanel";

export default function Overlay({ progress }) {
  return (
    <div className="overlay">
      <Nav currentSection={getNearestSection(progress)} />
      <HeroPanel progress={progress} />
      <AboutPanel progress={progress} />
      <SkillsPanel progress={progress} />
      <ProjectsPanel progress={progress} />
      <ContactPanel progress={progress} />
      <div className="hint" style={{ opacity: getSectionOpacity(progress, "hero") }}>
        SCROLL TO EXPLORE
      </div>
      <ProgressMeter progress={progress} />
    </div>
  );
}