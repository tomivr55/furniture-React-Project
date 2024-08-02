import environment from "../environments/environment";
import * as request from "./mainRequester";

const DATA_URL = environment.apiUrlData;

export const getAllFurnitures = async () => {
  const result = await request.get(DATA_URL);
  return result;
};
