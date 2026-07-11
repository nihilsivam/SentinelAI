import api from "./api";
import { USE_MOCK } from "./config";
import {
  securityTrend,
  driftDistribution,
} from "../data/chartData";

export const getChartData = async () => {
  if (USE_MOCK) {
    return Promise.resolve({
      securityTrend,
      driftDistribution,
    });
  }

  const response = await api.get("/dashboard");

  const metrics = response.data.data.metrics;
  const charts = response.data.data.charts;

  const distribution = [
    {
      name: "Critical",
      value: charts.risk_distribution.critical,
    },
    {
      name: "High",
      value: charts.risk_distribution.high,
    },
    {
      name: "Medium",
      value: charts.risk_distribution.medium,
    },
    {
      name: "Low",
      value: charts.risk_distribution.low,
    },
  ];

  // Temporary until historical data is added
  const trend = [
    {
      day: "Today",
      score: 100 - metrics.overall_risk,
      incidents: metrics.active_drifts,
    },
  ];

  return {
    securityTrend: trend,
    driftDistribution: distribution,
  };
};