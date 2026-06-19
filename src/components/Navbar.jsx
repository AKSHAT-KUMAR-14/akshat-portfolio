import "../styles/navbar.css";

function Navbar({ activeTab, setActiveTab }) {
  const tabs = ["About", "Resume", "Projects", "Contact"];

  return (
    <div className="navbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "nav-btn active" : "nav-btn"}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Navbar;