import api from "./api";
import { USE_MOCK } from "./config";
import { investigation as mockInvestigation } from "../data/aiInvestigationData";

export const getInvestigation = async () => {

  if (USE_MOCK) {
    return Promise.resolve(mockInvestigation);
  }

  const response = await api.get("/dashboard");

  return response.data.data.investigation;

};