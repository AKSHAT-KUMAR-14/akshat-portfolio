import "../styles/sidebar.css";
import { profile } from "../data/portfolioData";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile-section">
                <div className="avatar">
                    👨‍💻
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
        </div>
    );
}

export default Sidebar;