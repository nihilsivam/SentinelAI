function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        borderRight: "1px solid #ccc",
        padding: "20px",
      }}
    >
      <h2>SentinelAI</h2>

      <br />

      <div style={{ marginTop: "30px" }}>
  <p style={{ marginBottom: "15px" }}>Dashboard</p>
  <p style={{ marginBottom: "15px" }}>Incidents</p>
  <p style={{ marginBottom: "15px" }}>Assets</p>
  <p style={{ marginBottom: "15px" }}>Compliance</p>
  <p style={{ marginBottom: "15px" }}>MITRE</p>
  <p style={{ marginBottom: "15px" }}>AI Investigation</p>
  <p style={{ marginBottom: "15px" }}>Reports</p>
  <p style={{ marginBottom: "15px" }}>Settings</p>
</div>
    </div>
  );
}

export default Sidebar;