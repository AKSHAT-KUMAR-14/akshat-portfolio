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
    </div>
  );
}

export default Sidebar;