import api from "./api";

export const getMitreData = async () => {

  const response = await api.get("/incidents");

  return response.data.data;

};