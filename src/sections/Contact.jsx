function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's build something
            <span className="contact-heading-highlight">
              together.
            </span>
          </h2>
        </div>

        <div className="contact-grid">

          <div className="contact-intro">
            <p className="contact-main-text">
              I'm currently preparing for software development opportunities
              and always interested in connecting with people who are building
              interesting things.
            </p>

            <p className="contact-sub-text">
              Whether you want to discuss a project, collaboration,
              internship opportunity, or just connect, feel free to reach out.
            </p>

            <a
              href="mailto:ravulakesavachandu@gmail.com"
              className="contact-email-button"
            >
              Send me an email
              <span>→</span>
            </a>
          </div>

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
                LinkedIn Profile →
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
                GitHub Profile →
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
                LeetCode Profile →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;