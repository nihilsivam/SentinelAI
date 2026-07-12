import { useEffect, useState } from "react";
import "./Settings.css";

import { getSystemStatus } from "../../services/settingsService";

function Settings() {

  const [status, setStatus] = useState(null);

  useEffect(() => {

    async function load() {

      const data = await getSystemStatus();

      setStatus(data);

    }

    load();

  }, []);

  if (!status) {

    return (
      <div className="settings-page">
        <h2>Loading...</h2>
      </div>
    );

  }

  return (

    <div className="settings-page">

      <h1>System Settings</h1>

      <p>
        Monitor platform status and deployment information.
      </p>

      <div className="settings-grid">

        <div className="setting-card">

          <h3>Backend API</h3>

          <span className="online">🟢 Connected</span>

        </div>

        <div className="setting-card">

          <h3>Dataset</h3>

          <p>{status.dataset}</p>

        </div>

        <div className="setting-card">

          <h3>Events Loaded</h3>

          <h2>{status.events}</h2>

        </div>

        <div className="setting-card">

          <h3>AI Engine</h3>

          <span className="online">🟢 {status.ai}</span>

        </div>

        <div className="setting-card">

          <h3>Version</h3>

          <h2>{status.version}</h2>

        </div>

        <div className="setting-card">

          <h3>Last Updated</h3>

          <p>{new Date().toLocaleString()}</p>

        </div>

      </div>

    </div>

  );

}

export default Settings;