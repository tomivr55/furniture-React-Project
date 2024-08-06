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

export const addNewFurniture = (furnitureData) => {
  request.post(`${DATA_URL}`, furnitureData);
};

export const deleteFurniture = (furnitureId) => {
  request.del(`${DATA_URL}/${furnitureId}`);
};

export const updateFurniture = async (furnitureId, updatedData) => {
  await request.put(`${DATA_URL}/${furnitureId}`, updatedData);
};
