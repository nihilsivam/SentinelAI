import "./AttackExposureCard.css";

function AttackExposureCard({ exposure }) {
  return (
    <div className="attack-card">
      <h3>Attack Exposure</h3>

      <div className="technique">
        {exposure.technique}
      </div>

      <p>MITRE ATT&CK Technique</p>

      <div className="confidence">
        Confidence: {exposure.confidence}
      </div>
    </div>
  );
}

export default AttackExposureCard;