function Education() {
  const education = [
    {
      year: "2024 — 2028",
      degree: "B.Tech — Computer Science & Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution:
        "Veltech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
      location: "Chennai, Tamil Nadu",
      grade: "CGPA: 9.29 / 10",
    },
    {
      year: "2022 — 2024",
      degree: "Intermediate — Class XII",
      specialization: "MPC",
      institution: "Sri Chaitanya Junior College",
      location: "Andhra Pradesh",
      grade: "Percentage: 94.1%",
    },
    {
      year: "2022",
      degree: "Secondary School — Class X",
      specialization: "Andhra Pradesh State Board",
      institution: "Sri Chaitanya School",
      location: "Andhra Pradesh",
      grade: "Percentage: 84.3%",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">EDUCATION</p>

          <h2>
            My academic
            <span className="education-heading-highlight">
              journey.
            </span>
          </h2>
        </div>

        <div className="education-timeline">

          {education.map((item, index) => (
            <article
              className="education-item"
              key={item.year}
            >

              <div className="education-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-content">

                <div className="education-title-row">
                  <div>
                    <h3>{item.degree}</h3>

                    <h4>{item.specialization}</h4>
                  </div>

                  <span className="education-grade">
                    {item.grade}
                  </span>
                </div>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p className="education-location">
                  {item.location}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;