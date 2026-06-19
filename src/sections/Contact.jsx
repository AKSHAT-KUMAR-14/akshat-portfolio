import "../styles/contact.css";

function Contact() {
  return (
    <div>
      <h1 className="section-title">Contact</h1>

      <div className="contact-container">

        <div className="contact-card">
          <h2>Email</h2>

          <a
            href="mailto:akshatkumar0110@gmail.com"
          >
            akshatkumar0110@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h2>GitHub</h2>

          <a
            href="https://github.com/AKSHAT-KUMAR-14"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="contact-card">
          <h2>LinkedIn</h2>

          <a
            href="https://www.linkedin.com/in/akshat-kumar-sde/"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>

        <div className="contact-card">
          <h2>Location</h2>

          <p>Kanpur, Uttar Pradesh, India</p>
        </div>

      </div>
    </div>
  );
}

export default Contact;