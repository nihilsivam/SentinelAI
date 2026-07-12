import { useEffect, useState } from "react";
import "./Assets.css";

import { getIncidents } from "../../services/incidentService";

function Assets() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAssets() {
      try {
        const data = await getIncidents();
        setIncidents(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAssets();
  }, []);

  if (loading) {
    return (
      <div className="assets-page">
        <h1>Assets</h1>
        <h2>Loading...</h2>
      </div>
    );
  }

  const totalAssets = new Set(
    incidents.map((item) => item.asset)
  ).size;

  const totalControls = new Set(
    incidents.map((item) => item.control)
  ).size;

  const critical = incidents.filter(
    (item) => item.severity === "CRITICAL"
  ).length;

  const high = incidents.filter(
    (item) => item.severity === "HIGH"
  ).length;

  return (
    <div className="assets-page">

     <h1>Asset & Control Inventory</h1>
     <p>
      Inventory of monitored security controls and their current security posture.
      </p>

      <div className="asset-grid">

        <div className="asset-card">
          <h3>Environments</h3>
          <h2>{totalAssets}</h2>
        </div>

        <div className="asset-card">
          <h3>Controls</h3>
          <h2>{totalControls}</h2>
        </div>

        <div className="asset-card">
          <h3>Critical Drifts</h3>
          <h2>{critical}</h2>
        </div>

        <div className="asset-card">
          <h3>High Drifts</h3>
          <h2>{high}</h2>
        </div>

      </div>

      <table className="asset-table">

        <thead>

          <tr>

            <th>Environment</th>
            <th>Control ID</th>
            <th>Drift Type</th>
            <th>Severity</th>
            <th>Risk</th>

          </tr>

        </thead>

        <tbody>

          {incidents.map((asset, index) => (

            <tr key={index}>

              <td>{asset.asset}</td>

              <td>{asset.control}</td>

              <td>{asset.domain.replace(/_/g, " ")}</td>

              <td>{asset.severity}</td>

              <td>{asset.risk}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Assets;