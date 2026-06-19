import { projects } from "../data/portfolioData";
import "../styles/projects.css";

function Projects() {
  return (
    <div>
      <h1 className="section-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;