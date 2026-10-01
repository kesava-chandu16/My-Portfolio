function Projects() {
  const projects = [
    {
      number: "01",
      title: "Student Management System",
      description:
        "A Java-based application for managing student information and performing database operations such as creating, reading, updating, and deleting student records.",
      technologies: ["Java", "JDBC", "MySQL"],
      github:
        "https://github.com/kesava-chandu16/StudentManageMentSystem",
    },
    {
      number: "02",
      title: "Digital Wallet Secure System",
      description:
        "A Java-based digital wallet application designed to manage users and financial transactions while connecting the application with a MySQL database.",
      technologies: ["Java", "JDBC", "MySQL"],
      github:
        "https://github.com/kesava-chandu16/DigitalWalletSecureSystem",
    },
    {
      number: "03",
      title: "Smart Campus Navigation System",
      description:
        "A college navigation project designed to help students and visitors find blocks, laboratories, auditoriums, and other important locations around the campus.",
      technologies: ["Web Development", "Maps", "QR Codes"],
      github: null,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY PROJECTS</p>

          <h2>
            Things I've
            <span className="projects-heading-highlight">
              built.
            </span>
          </h2>
        </div>

        <div className="projects-list">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>

                <p>
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Source Code →
                  </a>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;