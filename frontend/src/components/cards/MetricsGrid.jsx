import "./MetricsGrid.css";
import MetricCard from "./MetricCard";
import { metrics } from "../../data/dashboardData";

function MetricsGrid() {
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