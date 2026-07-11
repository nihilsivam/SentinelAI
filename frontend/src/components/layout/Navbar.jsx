function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#111827",
        borderBottom: "1px solid #374151",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      <div>
        <h3>Security Operations Center</h3>

        <p
          style={{
            fontSize: "13px",
            color: "#9CA3AF",
          }}
        >
          Societe Generale CIB
        </p>
      </div>

      <input
        placeholder="Search..."
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <div>🔄 🔔 👤</div>
    </div>
  );
}

export default Navbar;