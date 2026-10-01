function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning what I learn into
            <span className="about-heading-highlight">
              practical projects.
            </span>
          </h2>
        </div>

        <div className="about-grid">

          {/* LEFT SIDE */}
          <div className="about-main">

            <p className="about-intro">
              I'm KesavaChandu Ravula, a Computer Science and Engineering
              student specializing in Artificial Intelligence and Machine
              Learning at Veltech University.
            </p>

            <p>
              I'm currently focused on becoming a strong Java developer.
              I enjoy solving programming problems, learning Data Structures
              and Algorithms, and building practical applications that help
              me turn concepts into real-world projects.
            </p>

            <p>
              My current technical interests include Java, MySQL, JDBC,
              full-stack development, and AI-powered applications.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="about-side">

            <div className="about-stat">
              <strong>9.29</strong>
              <span>Current CGPA</span>
            </div>

            <div className="about-stat">
              <strong>2028</strong>
              <span>Graduation Year</span>
            </div>

            <div className="about-focus">
              <span className="focus-label">CURRENT FOCUS</span>

              <div className="focus-tags">
                <span>Java</span>
                <span>DSA</span>
                <span>MySQL</span>
                <span>Full Stack</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;