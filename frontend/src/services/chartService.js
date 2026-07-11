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

  const response = await api.get("/charts");
  return response.data;
};