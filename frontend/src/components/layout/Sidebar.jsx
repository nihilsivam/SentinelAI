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
import "./Sidebar.css";

const menuItems = [
  { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
  { name: "Incidents", icon: <FiAlertTriangle />, path: "/incidents" },
  { name: "Controls", icon: <FiDatabase />, path: "/assets" },
  { name: "Compliance", icon: <FiShield />, path: "/compliance" },
  { name: "MITRE ATT&CK", icon: <FiTarget />, path: "/mitre" },
  { name: "AI Investigation", icon: <FiCpu />, path: "/ai" },
  { name: "Reports", icon: <FiFileText />, path: "/reports" },
  { name: "Settings", icon: <FiSettings />, path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <h2 className="logo-title">🛡 SentinelAI</h2>
        <p className="logo-subtitle">Drift Detection</p>
      </div>

      <nav className="menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="profile">
        <div className="avatar">C</div>

        <div>
          <h4>C. Moreau</h4>
          <p>Senior SOC Analyst</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;