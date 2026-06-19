import "../styles/resume.css";

function Resume() {
  return (
    <div>
      <h1 className="section-title">Resume</h1>

      <div className="resume-section">
        <h2>Education</h2>

        <div className="resume-card">
          <h3>M.Tech – Computer Science (AI & Data Science)</h3>
          <p>CSJMU • 2025 – Present</p>
          <p>CGPA: 8.61</p>
        </div>

        <div className="resume-card">
          <h3>B.Tech – Computer Science Engineering (Data Science)</h3>
          <p>Bennett University • 2021 – 2025</p>
          <p>CGPA: 8.9</p>
        </div>
      </div>

      <div className="resume-section">
        <h2>Experience</h2>

        <div className="resume-card">
          <h3>System Operations Intern</h3>
          <p>Vensure Employer Solutions</p>

          <ul>
            <li>Managed 6,000+ client-carrier data feeds.</li>
            <li>Maintained 99.9% data accuracy.</li>
            <li>Reduced backend latency by 30%.</li>
            <li>Improved reliability by 40%.</li>
            <li>Intern of the Month – March 2025.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>Certifications</h2>

        <div className="resume-card">
          <p>Google Data Analytics Professional Certificate</p>
          <p>The Bits and Bytes of Computer Networking</p>
          <p>Data Modeling in Power BI</p>
          <p>Neural Networks and Deep Learning</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;