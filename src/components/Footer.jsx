function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>K</span>CR
          </a>

          <p>
            Java Developer & Computer Science Student
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Kesava Chandu Ravula
        </p>

        <p>
          Built with React & Vite
        </p>

      </div>

    </footer>
  );
}

export default Footer;