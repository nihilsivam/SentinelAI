import api from "./api";
import { USE_MOCK } from "./config";
import { incidents as mockIncidents } from "../data/incidentsData";

export const getIncidents = async () => {

  if (USE_MOCK) {
    return Promise.resolve(mockIncidents);
  }

  const response = await api.get("/incidents");

  const backendIncidents = response.data.data;

  return backendIncidents.map((incident) => {

    const event = incident.events[0];

    return {

      priority:
        incident.risk_level === "CRITICAL"
          ? "P1"
          : incident.risk_level === "HIGH"
          ? "P2"
          : "P3",

      asset: event.control_id,

      control: event.parameter
        ?.replace(/_/g, " ")
        ?.replace(/\b\w/g, (c) => c.toUpperCase()),

      domain: incident.environment,

      severity: event.severity,

      risk: incident.overall_risk,

      status: event.status
        ? event.status.replace(/_/g, " ")
        : "Open",

      time: event.timestamp
        ? new Date(event.timestamp).toLocaleString()
        : "-",

      // Keep the original backend object so the
      // Incident Details Modal can use it later.
      raw: incident,

    };

  });

};