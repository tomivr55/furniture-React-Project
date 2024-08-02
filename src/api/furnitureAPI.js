import environment from "../environments/environment";
import * as request from "./mainRequester";

const DATA_URL = environment.apiUrlData;

export const getAllFurnitures = async () => {
  const response = await request.get(DATA_URL);
  const result = Object.values(response);
  return result;
};
