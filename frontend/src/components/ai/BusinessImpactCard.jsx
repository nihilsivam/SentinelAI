import "./BusinessImpactCard.css";

function BusinessImpactCard({ impact }) {
  return (
    <div className="impact-card">
      <h3>Business Impact</h3>

      <h2>{impact.title}</h2>

      <p>Estimated Loss</p>

      <div className="loss-value">
        {impact.estimate}
      </div>
    </div>
  );
}

export default BusinessImpactCard;