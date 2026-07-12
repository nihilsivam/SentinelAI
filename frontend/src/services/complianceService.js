import api from "./api";

export const getComplianceData = async () => {

  const response = await api.get("/dashboard");

  return {
    incidents: response.data.data.incidents,
    frameworks: response.data.data.compliance,
    configurationTimeline: response.data.data.timeline,
  };

};