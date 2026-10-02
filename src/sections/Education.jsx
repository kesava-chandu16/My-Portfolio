function Education() {
  const education = [
    {
      number: "01",
      period: "2024 — 2028",
      degree: "B.Tech",
      field: "Computer Science & Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution:
        "Veltech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
      location: "Chennai, Tamil Nadu",
      result: "CGPA 9.2 / 10",
      current: true,
    },
    {
      number: "02",
      period: "2022 — 2024",
      degree: "Intermediate",
      field: "Class XII",
      specialization: "MPC",
      institution: "Sri Chaitanya Junior College",
      location: "Andhra Pradesh",
      result: "94.1%",
      current: false,
    },
    {
      number: "03",
      period: "2022",
      degree: "Secondary School",
      field: "Class X",
      specialization: "Andhra Pradesh State Board",
      institution: "Sri Chaitanya",
      location: "Andhra Pradesh",
      result: "84.3%",
      current: false,
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading">
          <p className="section-label">EDUCATION</p>

          <h2>
            My academic
            <span className="education-heading-highlight">
              {" "}journey.
            </span>
          </h2>

          <p className="education-intro">
            My academic path has given me a strong foundation in computer
            science while allowing me to explore AI, software development,
            and practical programming.
          </p>
        </div>

        {/* Education timeline */}
        <div className="education-timeline">
          {education.map((item) => (
            <article
              className={`education-card ${
                item.current ? "education-current" : ""
              }`}
              key={item.number}
            >

              {/* Number */}
              <div className="education-card-number">
                {item.number}
              </div>

              {/* Main content */}
              <div className="education-card-main">

                <div className="education-card-header">

                  <div className="education-title-area">
                    <span className="education-period">
                      {item.period}
                    </span>

                    <h3>{item.degree}</h3>

                    <h4>{item.field}</h4>
                  </div>

                  <div className="education-result">
                    <span>{item.result}</span>

                    {item.current && (
                      <small>CURRENT</small>
                    )}
                  </div>

                </div>

                {/* Details */}
                <div className="education-card-details">

                  <div className="education-detail">
                    <span className="education-detail-label">
                      SPECIALIZATION
                    </span>

                    <p>{item.specialization}</p>
                  </div>

                  <div className="education-detail">
                    <span className="education-detail-label">
                      INSTITUTION
                    </span>

                    <p>{item.institution}</p>
                  </div>

                  <div className="education-detail">
                    <span className="education-detail-label">
                      LOCATION
                    </span>

                    <p>{item.location}</p>
                  </div>

                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;