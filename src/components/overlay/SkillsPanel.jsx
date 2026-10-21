import { skills } from "../../data/content";
import Panel from "./Panel";

const uniqueByName = (items) =>
  items.filter((item, index) => items.findIndex((other) => other.name === item.name) === index);

const hideBrokenImage = (event) => {
  event.currentTarget.style.display = "none";
};

export default function SkillsPanel({ progress }) {
  return (
    <Panel section="skills" progress={progress} className="wide">
      <div className="eyebrow">Skills</div>
      <h2>Tools I work with</h2>
      {skills.map((group) => (
        <div className="skill-group" key={group.title}>
          <div className="eyebrow" style={{ color: group.color }}>{group.title}</div>
          <div className="chips">
            {uniqueByName(group.skills).map((skill) => (
              <span className="chip" key={skill.name}>
                <img
                  src={skill.image}
                  alt=""
                  referrerPolicy="no-referrer"
                  onError={hideBrokenImage}
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Panel>
  );
}