import "../styles/sidebar.css";
import { profile } from "../data/portfolioData";
import profilePic from "../assets/profile.jpg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile-section">
                <div className="avatar">
                    <img
                        src={profilePic}
                        alt="Akshat Kumar"
                        className="profile-image"
                    />
                </div>

                <h2>{profile.name}</h2>

                <p>{profile.role}</p>
            </div>
            <hr className="divider" />

            <div className="contact-section">

                <div className="contact-item">
                    <strong>Email</strong>
                    <p>{profile.email}</p>
                </div>

                <div className="contact-item">
                    <strong>Location</strong>
                    <p>{profile.location}</p>
                </div>

            </div>
            
            <div className="social-section">

                <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                >
                    GitHub
                </a>

                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                >
                    LinkedIn
                </a>

                <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn resume-btn"
                >
                    Resume
                </a>

            </div>
        </div>
    );
}

export default Sidebar;