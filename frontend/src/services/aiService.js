import api from "./api";

export const getAIInvestigation = async () => {
  const response = await api.get("/incidents");
  return response.data.data;
};