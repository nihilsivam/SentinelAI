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

  const response = await api.get("/dashboard");

  return {
    frameworks: response.data.data.compliance,

    // Backend timeline already exists.
    // If your compliance page expects a separate configuration timeline,
    // we'll wire it here for now.
    configurationTimeline: response.data.data.timeline,
  };
};