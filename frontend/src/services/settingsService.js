import api from "./api";

export const getSystemStatus = async () => {
  const dashboard = await api.get("/dashboard");

  return {
    connected: true,
    version: "SentinelAI v1.0",
    dataset: "Official Hackathon Dataset",
    events: dashboard.data.data.total_events,
    ai: "Online",
    backend: "Connected",
  };
};