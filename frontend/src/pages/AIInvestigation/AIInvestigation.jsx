import { useEffect, useState } from "react";
import "./AIInvestigation.css";

import { getAIInvestigation } from "../../services/aiService";

function AIInvestigation() {
  const [incidents, setIncidents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getAIInvestigation();

      setIncidents(data);

      if (data.length > 0) {
        setSelected(data[0]);
      }
    }

    load();
  }, []);

  if (!selected) {
    return (
      <div className="ai-page">
        <h2 style={{ color: "white" }}>Loading...</h2>
      </div>
    );
  }

  const event = selected.events[0];

  return (
    <div className="ai-page">

      <h1>AI Security Investigation</h1>

      <p>
        AI-assisted explanation and remediation for detected incidents.
      </p>

      <select
        className="incident-select"
        value={selected.incident_id}
        onChange={(e) =>
          setSelected(
            incidents.find(
              (i) => i.incident_id === e.target.value
            )
          )
        }
      >
        {incidents.map((incident) => (
          <option
            key={incident.incident_id}
            value={incident.incident_id}
          >
            {incident.incident_id}
          </option>
        ))}
      </select>

      <div className="ai-card">

        <div className="badge-row">

          <span className="severity">
            {event.severity}
          </span>

          <span className="risk">
            Risk {selected.overall_risk}
          </span>

        </div>

        <h2>{event.control_id}</h2>

        <h3>{event.parameter.replace(/_/g, " ")}</h3>

        <p>
          {event.description}
        </p>

        <hr />

        <h3>AI Analysis</h3>

        <p>
          This configuration drift was detected in the
          <b> {selected.environment}</b> environment.
          The control has deviated from the approved
          baseline and may expose the organization to
          increased security risk.
        </p>

        <h3>Recommended Actions</h3>

        <ul>

          <li>Restore the approved configuration baseline.</li>

          <li>Review recent administrative changes.</li>

          <li>Validate all affected systems.</li>

          <li>Monitor for repeated occurrences.</li>

          <li>Document remediation for audit purposes.</li>

        </ul>

      </div>

    </div>
  );
}

export default AIInvestigation;