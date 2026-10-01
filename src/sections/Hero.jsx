
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-text">

          <div className="hero-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            <span className="first-name">Kesava Chandu</span>
            <span>Ravula.</span>
          </h1>

          <h2>
            Java Developer & Computer Science Student
          </h2>

          <p className="hero-description">
            I build practical software applications using Java, MySQL,
            and modern web technologies. Currently focused on strengthening
            my Data Structures & Algorithms and full-stack development skills.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Projects
              <span>→</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/kesava-chandu16"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kesavachandu-ravula-012074338/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/kesavachandu_16/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-frame">
            <img
              src="/profile.jpg"
              alt="Kesava Chandu Ravula"
              className="hero-profile-image"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;