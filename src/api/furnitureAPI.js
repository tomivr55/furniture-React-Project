import environment from "../environments/environment";
import * as request from "./mainRequester";

const DATA_URL = environment.apiUrlData;

export const getAllFurnitures = async () => {
  const response = await request.get(DATA_URL);
  const result = Object.values(response);
  return result;
};

export const getOneFurniture = async (furnitureId) => {
  const result = await request.get(`${DATA_URL}/${furnitureId}`);
  return result;
};
