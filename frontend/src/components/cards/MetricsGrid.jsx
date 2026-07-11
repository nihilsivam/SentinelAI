import "./MetricsGrid.css";
import MetricCard from "./MetricCard";

function MetricsGrid({ metrics }) {
  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          description={metric.description}
          trend={metric.trend}
          color={metric.color}
        />
      ))}
    </div>
  );
}

export default MetricsGrid;