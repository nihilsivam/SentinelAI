import api from "./api";
import { USE_MOCK } from "./config";
import {
  frameworks,
  configurationTimeline,
} from "../data/complianceData";

export const getComplianceData = async () => {
  if (USE_MOCK) {
    return Promise.resolve({
      frameworks,
      configurationTimeline,
    });
  }

  const response = await api.get("/compliance");
  return response.data;
};