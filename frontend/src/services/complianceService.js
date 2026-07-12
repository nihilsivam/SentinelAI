import api from "./api";

export const getComplianceData = async () => {
  const response = await api.get("/dashboard");

  return {
    frameworks: response.data.data.compliance,

    // Timeline returned by the dashboard API
    configurationTimeline: response.data.data.timeline,
  };
};