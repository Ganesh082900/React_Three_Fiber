import { Bio, education, experiences } from "../../data/content";
import Panel from "./Panel";

const currentJob = experiences[0];
const bootcamp = education[1];

export default function AboutPanel({ progress }) {
  return (
    <Panel section="about" progress={progress}>
      <div className="eyebrow">About</div>
      <h2>{Bio.name}</h2>
      <p>{Bio.description}</p>
      <div className="chips">
        {Bio.roles.map((role) => (
          <span className="chip" key={role}>{role}</span>
        ))}
      </div>
      <div className="proj">
        <b>{currentJob.role}</b>
        <span>{currentJob.company} · {currentJob.date}</span>
      </div>
      <div className="proj">
        <b>{bootcamp.degree}</b>
        <span>{bootcamp.school} · {bootcamp.date}</span>
      </div>
      <div className="btns btns--spaced">
        <a className="btn line" href={Bio.resume} target="_blank" rel="noreferrer">Resume</a>
      </div>
    </Panel>
  );
}