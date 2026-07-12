import "./IncidentDetailsModal.css";

function IncidentDetailsModal({ incident, onClose }) {
  return (
    <div className="modal-overlay">

      <div className="incident-modal">

        <div className="modal-header">

          <h2>Incident Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="modal-grid">

          <div className="info-card">
            <h4>Priority</h4>
            <p>{incident.priority}</p>
          </div>

          <div className="info-card">
            <h4>Asset</h4>
            <p>{incident.asset}</p>
          </div>

          <div className="info-card">
            <h4>Control</h4>
            <p>{incident.control}</p>
          </div>

          <div className="info-card">
            <h4>Domain</h4>
            <p>{incident.domain.replace(/_/g, " ")}</p>
          </div>

          <div className="info-card">
            <h4>Severity</h4>
            <p>{incident.severity}</p>
          </div>

          <div className="info-card">
            <h4>Risk Score</h4>
            <p>{incident.risk}</p>
          </div>

          <div className="info-card">
            <h4>Status</h4>
            <p>{incident.status}</p>
          </div>

          <div className="info-card">
            <h4>Detected</h4>
            <p>{incident.time}</p>
          </div>

        </div>

        <div className="details-section">

          <h3>Recommended Actions</h3>

          <ul>

            <li>✔ Restore the approved configuration baseline.</li>

            <li>✔ Review recent administrator activity.</li>

            <li>✔ Validate affected production systems.</li>

            <li>✔ Verify compliance against NIST, CIS and GDPR.</li>

            <li>✔ Monitor the control for recurring drift.</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default IncidentDetailsModal;