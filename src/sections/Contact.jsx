function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's build something
            <span className="contact-heading-highlight">
              {" "}together.
            </span>
          </h2>

          <p className="contact-section-intro">
            Have a project idea, internship opportunity, or just want to
            connect? I'd be happy to hear from you.
          </p>
        </div>

        {/* Contact content */}
        <div className="contact-grid">

          {/* Left */}
          <div className="contact-intro">

            <span className="contact-small-label">
              GET IN TOUCH
            </span>

            <h3>
              Let's start a
              <span> conversation.</span>
            </h3>

            <p className="contact-main-text">
              I'm currently preparing for software development opportunities
              and interested in connecting with people who are building
              interesting things.
            </p>

            <p className="contact-sub-text">
              Whether you want to discuss a project, collaboration,
              internship opportunity, or simply connect, feel free to reach
              out.
            </p>

            <a
              href="mailto:ravulakesavachandu@gmail.com"
              className="contact-email-button"
            >
              <span>Send me an email</span>
              <span>→</span>
            </a>

          </div>

          {/* Right */}
          <div className="contact-details">

            <div className="contact-detail">
              <span className="contact-detail-label">
                EMAIL
              </span>

              <a href="mailto:ravulakesavachandu@gmail.com">
                ravulakesavachandu@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">
                LINKEDIN
              </span>

              <a
                href="https://www.linkedin.com/in/kesavachandu-ravula-012074338/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
                <span>↗</span>
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">
                GITHUB
              </span>

              <a
                href="https://github.com/kesava-chandu16"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
                <span>↗</span>
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">
                LEETCODE
              </span>

              <a
                href="https://leetcode.com/u/kesavachandu_16/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode Profile
                <span>↗</span>
              </a>
            </div>

          </div>
        </div>

        {/* Availability */}
        <div className="contact-availability">
          <span className="contact-availability-dot"></span>

          <span>
            Open to software development opportunities
          </span>
        </div>

      </div>
    </section>
  );
}

export default Contact;