import "./styles/layout.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";

function App() {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div className="app-container">
      <div className="main-layout">

        <div
          style={{
            background: "#1e1e1f",
            minHeight: "700px",
            borderRadius: "20px",
          }}
        >
          <Sidebar />
        </div>

        <div
          style={{
            background: "#1e1e1f",
            minHeight: "700px",
            borderRadius: "20px",
          }}
        >
        <>
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div style={{ padding: "30px" }}>
            {activeTab === "About" && <About />}

            {activeTab === "Resume" && <Resume />}

            {activeTab === "Projects" && <Projects />}

            {activeTab === "Skills" && <Skills />}

            {activeTab === "Contact" && <h1>Contact</h1>}
          </div>
        </>
        </div>

      </div>
    </div>
  );
}

export default App;