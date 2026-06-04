import "./styles/layout.css";

function App() {
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
          Sidebar
        </div>

        <div
          style={{
            background: "#1e1e1f",
            minHeight: "700px",
            borderRadius: "20px",
          }}
        >
          Main Content
        </div>

      </div>
    </div>
  );
}

export default App;