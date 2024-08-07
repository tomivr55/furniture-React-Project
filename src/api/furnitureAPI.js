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

export const deleteFurniture = async (furnitureId) => {
  await request.del(`${DATA_URL}/${furnitureId}`);
};

export const updateFurniture = async (furnitureId, updatedData) => {
  await request.put(`${DATA_URL}/${furnitureId}`, updatedData);
};

export const searchFurniture = async (searchData) => {
  const params = new URLSearchParams({
    where: `name LIKE "${searchData}"`,
  });

  const modParams = params.toString().replaceAll("+", "%20");
  const result = await request.get(`${DATA_URL}?${modParams}`);

  return result;
};
