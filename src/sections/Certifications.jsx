function Certifications() {
  const certifications = [
    {
      title: "Cisco Networking Academy",
      organization: "Cisco",
      description:
        "Completed networking-focused learning and developed foundational knowledge of computer networks.",
    },
    {
      title: "Salesforce Trailhead",
      organization: "Salesforce",
      description:
        "Completed Salesforce learning modules covering users, permissions, roles, and platform fundamentals.",
    },
    {
      title: "Credly Certifications",
      organization: "Credly",
      description:
        "Professional digital badges earned through technical learning and certification activities.",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">CERTIFICATIONS</p>
          <h2>Learning beyond the classroom.</h2>
        </div>

        <div className="certifications-grid">

          {certifications.map((certification, index) => (
            <article
              className="certification-card"
              key={index}
            >
              <div className="certification-number">
                0{index + 1}
              </div>

              <h3>{certification.title}</h3>

              <p className="certification-organization">
                {certification.organization}
              </p>

              <p className="certification-description">
                {certification.description}
              </p>

              <button className="certificate-button">
                View Certificate →
              </button>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;