import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop - 180;

          if (window.scrollY >= sectionTop) {
            current = link.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToSection = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >

      <div className="navbar-container">

        {/* LOGO */}

        <button
          className="navbar-logo"
          onClick={() => goToSection("home")}
          aria-label="Go to home"
        >

          <span className="navbar-logo-mark">
            K
          </span>

          <span className="navbar-logo-text">
            KCR
          </span>

        </button>


        {/* DESKTOP NAVIGATION */}

        <nav className="navbar-links">

          {navLinks.map((link) => (

            <button
              key={link.id}
              className={`navbar-link ${
                activeSection === link.id
                  ? "active"
                  : ""
              }`}
              onClick={() => goToSection(link.id)}
            >

              {link.name}

            </button>

          ))}

        </nav>


        {/* DESKTOP CTA */}

        <button
          className="navbar-cta"
          onClick={() => goToSection("contact")}
        >

          <span>
            Let's Talk
          </span>

          <span className="navbar-cta-arrow">
            ↗
          </span>

        </button>


        {/* MOBILE MENU BUTTON */}

        <button
          className={`navbar-menu-button ${
            menuOpen ? "menu-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <div className="mobile-menu-inner">

          {navLinks.map((link, index) => (

            <button
              key={link.id}
              className={`mobile-menu-link ${
                activeSection === link.id
                  ? "active"
                  : ""
              }`}
              onClick={() => goToSection(link.id)}
            >

              <span className="mobile-menu-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>
                {link.name}
              </span>

              <span className="mobile-menu-arrow">
                ↗
              </span>

            </button>

          ))}


          <button
            className="mobile-menu-cta"
            onClick={() => goToSection("contact")}
          >

            Let's work together

            <span>
              →
            </span>

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;