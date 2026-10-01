function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            KCR
          </a>

          <p>
            Java Developer & Computer Science Student
          </p>
        </div>

        <div className="footer-links">

          <a
            href="#home"
          >
            Home
          </a>

          <a
            href="#about"
          >
            About
          </a>

          <a
            href="#projects"
          >
            Projects
          </a>

          <a
            href="#contact"
          >
            Contact
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} KesavaChandu Ravula
        </p>

        <p>
          Built with React & Vite
        </p>

      </div>

    </footer>
  );
}

export default Footer;