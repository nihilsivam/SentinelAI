import api from "./api";
import { USE_MOCK } from "./config";
import { investigation } from "../data/aiInvestigationData";

export const getInvestigation = async () => {
  if (USE_MOCK) {
    return Promise.resolve(investigation);
  }

  const response = await api.get("/investigation");
  return response.data;
};