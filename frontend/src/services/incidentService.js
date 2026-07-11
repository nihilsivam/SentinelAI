import api from "./api";
import { USE_MOCK } from "./config";
import { incidents } from "../data/incidentsData";

export const getIncidents = async () => {
  if (USE_MOCK) {
    return Promise.resolve(incidents);
  }

  const response = await api.get("/dashboard");

  const backendIncidents = response.data.data.incidents;

  return backendIncidents.map((incident) => ({
    priority:
      incident.overall_risk >= 90
        ? "P1"
        : incident.overall_risk >= 70
        ? "P2"
        : "P3",

    asset: incident.events[0]?.control_id || "Unknown",

    control:
      incident.events[0]?.parameter
        ?.replace(/_/g, " ")
        ?.replace(/\b\w/g, (c) => c.toUpperCase()) || "Unknown",

    domain: incident.environment,

    severity: incident.risk_level,

    risk: incident.overall_risk,

    status: "Open",

    time: incident.events[0]?.timestamp || "-",
  }));
};