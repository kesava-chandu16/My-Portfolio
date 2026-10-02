import {
  SiMysql,
  SiReact,
  SiSpringboot,
  SiLeetcode,
  SiPython,
} from "react-icons/si";

import {
  FaGithub,
  FaLinkedin,
  FaJava,
} from "react-icons/fa6";

function Hero() {

  const technologies = [
    {
      name: "Java",
      icon: <FaJava />,
      className: "hero-tech-java",
    },
    {
      name: "React",
      icon: <SiReact />,
      className: "hero-tech-react",
    },

    {
      name: "MySQL",
      icon: <SiMysql />,
      className: "hero-tech-mysql",
    },

    {
      name: "DSA",
      icon: "⌘",
      className: "hero-tech-dsa",
    },

    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
      className: "hero-tech-spring",
    },

    {
      name: "Python",
      icon: <SiPython />,
      className: "hero-tech-ai",
    },
  ];


  return (
    <section className="hero" id="home">

      {/* BACKGROUND */}

      <div className="hero-background">

        <div className="hero-background-glow hero-glow-one"></div>

        <div className="hero-background-glow hero-glow-two"></div>

        <div className="hero-grid"></div>

      </div>


      <div className="hero-container">

        {/* =========================================
            LEFT SIDE
            ========================================= */}

        <div className="hero-content">

          <div className="hero-availability">

            <span className="availability-dot"></span>

            <span>
              Available for opportunities
            </span>

          </div>


          <p className="hero-greeting">
            Hello, I'm
          </p>


          <h1 className="hero-title">

            Kesava Chandu

            <span>
              Ravula.
            </span>

          </h1>


          <div className="hero-position">

            <span className="position-line"></span>

            <strong>
              Java Developer
            </strong>

            <span className="position-separator">
              /
            </span>

            <span>
              CSE • AI & ML Student
            </span>

          </div>


          <p className="hero-description">

            Computer Science student focused on Java development,
            Data Structures & Algorithms, SQL, and full-stack application
            development. I enjoy turning concepts into practical,
            reliable software.

          </p>


          {/* RECRUITER STATS */}

          <div className="hero-stats">

            <div className="hero-stat">

              <strong>
                9.2
              </strong>

              <span>
                Current CGPA
              </span>

            </div>


            <div className="hero-stat">

              <strong>
                3
              </strong>

              <span>
                Projects
              </span>

            </div>


            <div className="hero-stat">

              <strong>
                2028
              </strong>

              <span>
                Graduation
              </span>

            </div>

          </div>


          {/* BUTTONS */}

          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-primary-button"
            >

              <span>
                View My Projects
              </span>

              <span>
                ↗
              </span>

            </a>


            <a
              href="#contact"
              className="hero-secondary-button"
            >

              Contact Me

              <span>
                →
              </span>

            </a>

          </div>


          {/* SOCIALS */}

          <div className="hero-social-section">

            <span>
              FIND ME ON
            </span>


            <div className="hero-social-links">

              <a
                href="https://github.com/kesava-chandu16"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaGithub />

                <span>
                  GitHub
                </span>

                <b>
                  ↗
                </b>

              </a>


              <a
                href="https://www.linkedin.com/in/kesavachandu-ravula-012074338/"
                target="_blank"
                rel="noopener noreferrer"
              >

                <FaLinkedin />

                <span>
                  LinkedIn
                </span>

                <b>
                  ↗
                </b>

              </a>


              <a
                href="https://leetcode.com/u/kesavachandu_16/"
                target="_blank"
                rel="noopener noreferrer"
              >

                <SiLeetcode />

                <span>
                  LeetCode
                </span>

                <b>
                  ↗
                </b>

              </a>

            </div>

          </div>

        </div>


        {/* =========================================
            RIGHT SIDE
            ========================================= */}

        <div className="hero-visual">


          {/* TECHNOLOGY BADGES */}

          <div className="hero-technologies">

            {technologies.map((technology) => (

              <div
                key={technology.name}
                className={`hero-tech-badge ${technology.className}`}
              >

                <span className="tech-icon">
                  {technology.icon}
                </span>

                <span>
                  {technology.name}
                </span>

              </div>

            ))}

          </div>


          {/* ORBITS */}

          <div className="hero-orbit hero-orbit-main"></div>

          <div className="hero-orbit hero-orbit-small"></div>


          {/* PHOTO */}

          <div className="hero-photo-wrapper">

            <div className="hero-photo-glow"></div>

            <div className="hero-photo">

              <img
                src="/profile.jpg"
                alt="Kesava Chandu Ravula"
              />

            </div>

          </div>


          {/* PHOTO CAPTION */}

          <div className="hero-photo-caption">

            <span className="caption-dot"></span>

            <span>
              BUILDING • LEARNING • GROWING
            </span>

          </div>


          {/* CODE CARD */}

          <div className="hero-code-card">

            <span>
              &lt;/&gt;
            </span>

            <div>

              <strong>
                Java
              </strong>

              <small>
                Building with code
              </small>

            </div>

          </div>


        </div>

      </div>


      {/* SCROLL */}

      <a
        href="#about"
        className="hero-scroll-indicator"
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <i></i>

      </a>

    </section>
  );
}


export default Hero;