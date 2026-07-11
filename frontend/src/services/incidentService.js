import api from "./api";
import { USE_MOCK } from "./config";
import { incidents } from "../data/incidentsData";

export const getIncidents = async () => {
  if (USE_MOCK) {
    return Promise.resolve(incidents);
  }

  const response = await api.get("/incidents");
  return response.data;
};