function About() {
  const journey = [
    {
      number: "01",
      title: "Computer Science",
      text: "Building a strong foundation in programming, OOP, DSA, DBMS, Operating Systems, and Computer Networks.",
    },
    {
      number: "02",
      title: "Java Development",
      text: "Currently focused on Core Java, JDBC, MySQL, and building practical applications with Java.",
    },
    {
      number: "03",
      title: "Full Stack",
      text: "Expanding into React, Spring Boot, and full-stack development to build complete applications.",
    },
    {
      number: "04",
      title: "AI & ML",
      text: "Exploring Artificial Intelligence and Machine Learning through academic work and practical projects.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="section-container">

        {/* Section heading */}
        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Learning.
            <span className="about-heading-highlight"> Building.</span>
            Growing.
          </h2>

          <p className="about-section-intro">
            A Computer Science student focused on becoming a strong software
            developer through consistent learning, problem solving, and
            practical project development.
          </p>
        </div>

        {/* Main About content */}
        <div className="about-intro-grid">

          <div className="about-main">
            <span className="about-small-label">WHO I AM</span>

            <p className="about-intro">
              I'm Kesava Chandu Ravula, a Computer Science and Engineering
              student specializing in Artificial Intelligence and Machine
              Learning at Veltech.
            </p>

            <p>
              My current goal is to become a strong software developer. I enjoy
              understanding how things work, solving programming problems, and
              turning what I learn into practical applications.
            </p>

            <p>
              Right now, I'm putting most of my effort into Java, Data
              Structures and Algorithms, MySQL, and full-stack development
              while continuing to explore AI and ML.
            </p>

            <div className="about-highlight-line">
              <span></span>
              <p>Learning by building real projects.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="about-stats">

            <div className="about-stat-card">
              <span className="about-stat-number">9.2</span>
              <span className="about-stat-label">CURRENT CGPA</span>
            </div>

            <div className="about-stat-card">
              <span className="about-stat-number">2028</span>
              <span className="about-stat-label">GRADUATION</span>
            </div>

            <div className="about-stat-card about-stat-wide">
              <span className="about-stat-label">PRIMARY FOCUS</span>

              <div className="about-focus-tags">
                <span>Java</span>
                <span>DSA</span>
                <span>MySQL</span>
                <span>Full Stack</span>
              </div>
            </div>

          </div>
        </div>

        {/* Journey */}
        <div className="about-journey">

          <div className="about-journey-heading">
            <div>
              <span className="section-label">MY JOURNEY</span>
              <h3>What I'm working toward</h3>
            </div>

            <p>
              A continuous path from fundamentals to building complete
              applications.
            </p>
          </div>

          <div className="journey-grid">
            {journey.map((item) => (
              <article className="journey-card" key={item.number}>

                <div className="journey-card-top">
                  <span className="journey-number">
                    {item.number}
                  </span>

                  <span className="journey-arrow">↗</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;