function Skills() {
  const skills = [
    {
      category: "Programming",
      description: "Languages I use to build applications and solve problems.",
      items: ["Java", "C", "Python", "JavaScript"],
    },
    {
      category: "Database",
      description: "Working with relational databases and application connectivity.",
      items: ["MySQL", "SQL", "JDBC"],
    },
    {
      category: "Web Development",
      description: "Technologies I'm using to build modern web applications.",
      items: ["HTML", "CSS", "React"],
    },
    {
      category: "Developer Tools",
      description: "Tools I use for development, version control, and projects.",
      items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code"],
    },
    {
      category: "Core Concepts",
      description: "Computer science fundamentals I'm strengthening for placements.",
      items: ["OOP", "DSA", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      category: "Currently Learning",
      description: "Technologies I'm actively exploring and improving.",
      items: ["Spring Boot", "Full Stack Development", "AI/ML"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>

          <h2>
            Tools and technologies
            <span className="skills-heading-highlight">
              I'm working with.
            </span>
          </h2>
        </div>

        <div className="skills-grid">

          {skills.map((skillGroup, index) => (
            <article className="skill-card" key={skillGroup.category}>

              <div className="skill-card-top">
                <span className="skill-number">
                  0{index + 1}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <h3>{skillGroup.category}</h3>

              <p className="skill-description">
                {skillGroup.description}
              </p>

              <div className="skill-list">
                {skillGroup.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;