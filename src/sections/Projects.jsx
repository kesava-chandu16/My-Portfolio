import {
  FaJava,
  FaDatabase,
  FaMapMarkedAlt,
  FaGithub,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "JAVA • DATABASE",
      title: "Student Management System",
      description:
        "A Java-based application for managing student information with MySQL database connectivity and CRUD operations.",
      technologies: [
        { name: "Java", icon: <FaJava /> },
        { name: "JDBC", icon: <FaDatabase /> },
        { name: "MySQL", icon: <FaDatabase /> },
      ],
      features: [
        "CRUD Operations",
        "Database Connectivity",
        "Student Records",
      ],
      github:
        "https://github.com/kesava-chandu16/StudentManageMentSystem",
    },

    {
      number: "02",
      category: "JAVA • DATABASE",
      title: "Digital Wallet Secure System",
      description:
        "A Java-based digital wallet application designed to manage users and financial transactions with MySQL database integration.",
      technologies: [
        { name: "Java", icon: <FaJava /> },
        { name: "JDBC", icon: <FaDatabase /> },
        { name: "MySQL", icon: <FaDatabase /> },
      ],
      features: [
        "User Management",
        "Transactions",
        "Database Integration",
      ],
      github:
        "https://github.com/kesava-chandu16/DigitalWalletSecureSystem",
    },

    {
      number: "03",
      category: "WEB • NAVIGATION",
      title: "College Map",
      description:
        "A campus navigation project designed to help students and visitors find blocks, laboratories, auditoriums, and other important locations.",
      technologies: [
        { name: "Web", icon: "⌘" },
        { name: "Maps", icon: <FaMapMarkedAlt /> },
        { name: "QR Codes", icon: "⌁" },
      ],
      features: [
        "Campus Navigation",
        "Location Discovery",
        "QR Access",
      ],
      github: null,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <p className="section-label">SELECTED WORK</p>

          <h2>
            Projects I've
            <span className="projects-heading-highlight">
              {" "}built.
            </span>
          </h2>

          <p className="projects-intro">
            Practical applications where I apply programming, database
            concepts, problem-solving, and software development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              {/* Top */}
              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              {/* Main content */}
              <div className="project-card-content">

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom */}
              <div className="project-card-bottom">

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span
                      className="project-technology"
                      key={technology.name}
                    >
                      <span className="project-tech-icon">
                        {technology.icon}
                      </span>

                      {technology.name}
                    </span>
                  ))}
                </div>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />

                    <span>GitHub</span>

                    <span>↗</span>
                  </a>
                ) : (
                  <span className="project-status">
                    In Development
                  </span>
                )}

              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="projects-bottom">
          <span className="projects-bottom-line"></span>

          <p>
            More projects will be added as I continue learning and building.
          </p>

          <span className="projects-bottom-line"></span>
        </div>

      </div>
    </section>
  );
}

export default Projects;