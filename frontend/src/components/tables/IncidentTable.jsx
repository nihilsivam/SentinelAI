import { useMemo, useState } from "react";
import "./IncidentTable.css";

function IncidentTable({ incidents, onView }) {
  const [search, setSearch] = useState("");

  const filteredIncidents = useMemo(() => {
    if (!search.trim()) return incidents;

    const keyword = search.toLowerCase();

    return incidents.filter((incident) => {
      return (
        String(incident.priority ?? "").toLowerCase().includes(keyword) ||
        String(incident.asset ?? "").toLowerCase().includes(keyword) ||
        String(incident.control ?? "").toLowerCase().includes(keyword) ||
        String(incident.domain ?? "").toLowerCase().includes(keyword) ||
        String(incident.severity ?? "").toLowerCase().includes(keyword) ||
        String(incident.status ?? "").toLowerCase().includes(keyword)
      );
    });
  }, [incidents, search]);

  return (
    <div className="incident-table-container">
      <div className="table-header">
        <h2>Critical Incidents</h2>

        <div className="filters">
          <input
            className="search-box"
            type="text"
            placeholder="🔍 Search by Control, Severity, Asset..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
          {filteredIncidents.length > 0 ? (
            filteredIncidents.map((incident, index) => (
              <tr key={index}>
                <td>
                  <span
                    className={`priority ${String(
                      incident.priority
                    ).toLowerCase()}`}
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
                        style={{
                          width: `${incident.risk}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </td>

                <td>
                  <span
                    className={`status ${String(incident.status)
                      .replace(/\s+/g, "")
                      .toLowerCase()}`}
                  >
                    {incident.status}
                  </span>
                </td>

                <td>{incident.time}</td>

                <td className="actions">
                  <button
                    title="View Details"
                    onClick={() => onView(incident)}
                  >
                    👁
                  </button>

                  <button title="Run Playbook">
                    ⚡
                  </button>

                  <button title="Generate Report">
                    📄
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="9"
                style={{
                  textAlign: "center",
                  padding: "30px",
                  color: "#94A3B8",
                  fontWeight: "500",
                }}
              >
                No incidents found matching <b>"{search}"</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default IncidentTable;