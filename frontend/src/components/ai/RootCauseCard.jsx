import "./RootCauseCard.css";

function RootCauseCard({ rootCause }) {
  return (
    <div className="root-card">
      <h3>Root Cause</h3>

      <div className="flow">

        <div className="flow-box">
          ⚙ {rootCause.source}
        </div>

        <div className="arrow">
          ↓
        </div>

        <div className="flow-box">
          🛡 {rootCause.action}
        </div>

        <div className="arrow">
          ↓
        </div>

        <div className="flow-box">
          ❌ {rootCause.result}
        </div>

      </div>
    </div>
  );
}

export default RootCauseCard;