import api from "./api";
import { USE_MOCK } from "./config";
import { metrics } from "../data/dashboardData";

export const getDashboardMetrics = async () => {
  if (USE_MOCK) {
    return Promise.resolve(metrics);
  }

  const response = await api.get("/dashboard");
  return response.data;
};