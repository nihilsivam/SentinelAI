import api from "./api";
import { USE_MOCK } from "./config";
import { metrics } from "../data/dashboardData";

export const getDashboardMetrics = async () => {
  if (USE_MOCK) {
    return Promise.resolve(metrics);
  }

  const response = await api.get("/dashboard");

  const summary = response.data.data.metrics;

  return [
    {
      title: "Security Score",
      value: `${100 - summary.overall_risk}%`,
      description: "Overall Security Health",
      trend: `${summary.overall_risk}% Risk`,
      color: "#3B82F6",
    },
    {
      title: "Compliance Score",
      value: `${summary.compliance_score}%`,
      description: "Compliance Status",
      trend: `${summary.compliance_score}% Healthy`,
      color: "#10B981",
    },
    {
      title: "Critical Incidents",
      value: summary.critical_incidents,
      description: "Active Critical Threats",
      trend: `${summary.active_drifts} Active Drifts`,
      color: "#EF4444",
    },
    {
      title: "Protected Controls",
      value: `${summary.healthy_controls}/${summary.total_controls}`,
      description: "Healthy Controls",
      trend: `${summary.total_controls} Total Controls`,
      color: "#F59E0B",
    },
  ];
};