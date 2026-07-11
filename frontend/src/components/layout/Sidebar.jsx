import {
  FiHome,
  FiAlertTriangle,
  FiDatabase,
  FiShield,
  FiTarget,
  FiCpu,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
  { name: "Incidents", icon: <FiAlertTriangle />, path: "/incidents" },
  { name: "Assets", icon: <FiDatabase />, path: "/assets" },
  { name: "Compliance", icon: <FiShield />, path: "/compliance" },
  { name: "MITRE ATT&CK", icon: <FiTarget />, path: "/mitre" },
  { name: "AI Investigation", icon: <FiCpu />, path: "/ai" },
  { name: "Reports", icon: <FiFileText />, path: "/reports" },
  { name: "Settings", icon: <FiSettings />, path: "/settings" },
];

function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        background: "#111827",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "24px",
      }}
    >
      {/* Logo */}
      <div>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          🛡 SentinelAI
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            fontSize: "14px",
            marginTop: "8px",
          }}
        >
          Drift Detection
        </p>
      </div>

      {/* Menu */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              borderRadius: "10px",
              textDecoration: "none",
              color: "white",
              background: isActive ? "#2563EB" : "transparent",
              transition: "0.2s",
            })}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Profile */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "20px",
          borderTop: "1px solid #374151",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#2563EB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            C
          </div>

          <div>
            <h4>C. Moreau</h4>

            <p
              style={{
                color: "#9CA3AF",
                fontSize: "13px",
              }}
            >
              Senior SOC Analyst
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;