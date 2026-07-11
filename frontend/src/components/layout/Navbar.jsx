import {
  FiSearch,
  FiRefreshCw,
  FiBell,
  FiUser,
} from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2>Security Operations Center</h2>
        <p>Societe Generale CIB</p>
      </div>

      <div className="navbar-center">
        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search assets, incidents..."
          />
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-btn">
          <FiRefreshCw />
        </button>

        <button className="icon-btn">
          <FiBell />
        </button>

        <button className="icon-btn">
          <FiUser />
        </button>
      </div>
    </header>
  );
}

export default Navbar;