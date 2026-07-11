import { incidents } from "../../data/incidentsData";
import "./IncidentTable.css";

function IncidentTable() {
  return (
    <div className="incident-table-container">
      <div className="table-header">
        <h2>Critical Incidents</h2>

        <div className="filters">
          <button>Severity</button>
          <button>Domain</button>
          <button>Status</button>
          <button>Time</button>
        </div>
      </div>

      <table className="incident-table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Asset</th>
            <th>Control</th>
            <th>Domain</th>
            <th>Severity</th>
            <th>Risk</th>
            <th>Status</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map((incident, index) => (
            <tr key={index}>
              <td>
                <span
                  className={`priority ${incident.priority.toLowerCase()}`}
                >
                  {incident.priority}
                </span>
              </td>

              <td>{incident.asset}</td>

              <td>{incident.control}</td>

              <td>{incident.domain}</td>

              <td>{incident.severity}</td>

              <td>
                <div className="risk-cell">
                  <span>{incident.risk}</span>

                  <div className="risk-bar">
                    <div
                      className="risk-fill"
                      style={{ width: `${incident.risk}%` }}
                    ></div>
                  </div>
                </div>
              </td>

              <td>
                <span
                  className={`status ${incident.status
                    .replace(/\s+/g, "")
                    .toLowerCase()}`}
                >
                  {incident.status}
                </span>
              </td>

              <td>{incident.time}</td>

              <td className="actions">
                <button>👁</button>
                <button>⚡</button>
                <button>📄</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IncidentTable;