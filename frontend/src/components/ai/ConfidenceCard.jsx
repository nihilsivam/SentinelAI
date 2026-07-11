import "./ConfidenceCard.css";

function ConfidenceCard({ confidence, priority }) {
  return (
    <div className="confidence-card">

      <h3>Confidence</h3>

      <div className="confidence-value">
        {confidence}%
      </div>

      <p className="confidence-text">
        Rule Engine Verified
      </p>

      <span className="priority-badge">
        Priority {priority}
      </span>

    </div>
  );
}

export default ConfidenceCard;