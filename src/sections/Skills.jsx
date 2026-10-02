import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaDatabase,
  FaServer,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      category: "PROGRAMMING",
      title: "Languages",
      description:
        "Languages I use for application development, problem solving, and DSA practice.",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "C", icon: <FaCode /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },

    {
      number: "02",
      category: "BACKEND & DATABASE",
      title: "Backend & Data",
      description:
        "Technologies I use to work with application logic, databases, and connectivity.",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "JDBC", icon: <FaServer /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
      ],
    },

    {
      number: "03",
      category: "FRONTEND",
      title: "Web Development",
      description:
        "Technologies I use to create responsive and interactive web interfaces.",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
      ],
    },

    {
      number: "04",
      category: "DEVELOPER TOOLS",
      title: "Tools",
      description:
        "Tools I use for development, version control, database management, and coding.",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "IntelliJ IDEA", icon: <FaCode /> },
        { name: "MySQL Workbench", icon: <FaDatabase /> },
      ],
    },

    {
      number: "05",
      category: "COMPUTER SCIENCE",
      title: "Core Concepts",
      description:
        "Fundamentals I'm strengthening for software development and placement preparation.",
      skills: [
        { name: "OOP", icon: <FaCode /> },
        { name: "DSA", icon: <FaCode /> },
        { name: "DBMS", icon: <FaDatabase /> },
        { name: "Operating Systems", icon: <FaServer /> },
        { name: "Computer Networks", icon: <FaServer /> },
      ],
    },

    {
      number: "06",
      category: "CURRENTLY LEARNING",
      title: "Next Technologies",
      description:
        "Technologies I'm actively learning to expand my full-stack development capabilities.",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React", icon: <FaReact /> },
        { name: "Full Stack", icon: <FaCode /> },
        { name: "AI / ML", icon: <FaPython /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <p className="section-label">SKILLS & TECHNOLOGIES</p>

          <h2>
            Tools I use to
            <span className="skills-heading-highlight">
              {" "}build things.
            </span>
          </h2>

          <p className="skills-intro">
            A growing set of technologies and computer science fundamentals
            that I use while learning, solving problems, and building projects.
          </p>
        </div>

        {/* Skill cards */}
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>

              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-category">
                  {group.category}
                </span>
              </div>

              <div className="skill-card-content">
                <h3>{group.title}</h3>

                <p>{group.description}</p>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill.name}>
                    <span className="skill-tag-icon">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

        {/* Current focus */}
        <div className="skills-bottom">

          <span className="skills-bottom-label">
            CURRENTLY FOCUSED ON
          </span>

          <div className="skills-focus-list">
            <span>Java</span>
            <span>DSA</span>
            <span>MySQL</span>
            <span>Spring Boot</span>
            <span>Full Stack Development</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;