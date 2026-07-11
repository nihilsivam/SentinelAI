import "./MetricCard.css";

function MetricCard({ title, value, description, trend, color }) {
  return (
    <div className="metric-card">
      <div
        className="metric-icon"
        style={{ backgroundColor: color }}
      ></div>

      <h4 className="metric-title">{title}</h4>

      <h2 className="metric-value">{value}</h2>

      <p className="metric-description">{description}</p>

      <span className="metric-trend">{trend}</span>
    </div>
  );
}

export default MetricCard;