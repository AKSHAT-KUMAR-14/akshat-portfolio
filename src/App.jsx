import "./styles/layout.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";

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
            <h1>{activeTab}</h1>
          </div>
        </>
        </div>

      </div>
    </div>
  );
}

export default App;