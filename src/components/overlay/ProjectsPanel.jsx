import { projects } from "../../data/content";
import Panel from "./Panel";

const featuredProjects = projects
  .filter((project) => project.featured)
  .concat(projects.filter((project) => !project.featured).slice(0, 1));

export default function ProjectsPanel({ progress }) {
  return (
    <Panel section="projects" progress={progress}>
      <div className="eyebrow">Projects</div>
      <h2>Selected work</h2>
      {featuredProjects.map((project) => (
        <a
          className="proj"
          key={project.id}
          href={project.webapp || project.github}
          target="_blank"
          rel="noreferrer"
        >
          <b>{project.title}</b>
          <span>{project.description}</span>
          <span>{project.tags.join(" · ")}</span>
        </a>
      ))}
    </Panel>
  );
}