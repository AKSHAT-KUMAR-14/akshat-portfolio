import { projects } from "../data/portfolioData";
import "../styles/projects.css";

function Projects() {
  return (
    <div>
      <h1 className="section-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;