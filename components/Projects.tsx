import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="section-shell section-block" id="projects">
      <div className="section-heading reveal">
        <div><p className="section-kicker">02 / SELECTED WORK</p><h2>Projects I’ve <em>built.</em></h2></div>
        <p>Four projects, four different kinds of problems — each approached with curiosity and care.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card reveal" key={project.title}>
            <div className={`project-visual ${project.visual}`} role="img" aria-label={`${project.title} project preview`}>
              <span className="project-number">0{index + 1}</span>
              <div className="mock-window"><i /><i /><i /><div className="mock-content"><b>{project.title}</b><span /></div></div>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <span>↗</span></a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
