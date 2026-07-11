import "./MitreMatrix.css";

const tactics = [
  "Initial Access",
  "Execution",
  "Persistence",
  "Privilege Escalation",
  "Defense Evasion",
  "Credential Access",
  "Discovery",
  "Lateral Movement",
  "Collection",
  "Command & Control",
  "Exfiltration",
  "Impact",
];

function MitreMatrix() {
  return (
    <div className="mitre-card">
      <h3>MITRE ATT&CK Matrix</h3>

      <div className="mitre-grid">
        {tactics.map((item, index) => (
          <div
            key={index}
            className={`mitre-item ${
              item === "Defense Evasion" ? "active" : ""
            }`}
          >
            <strong>{item}</strong>

            {item === "Defense Evasion" && (
              <>
                <p>T1562.001</p>
                <span>Impair Defenses</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MitreMatrix;