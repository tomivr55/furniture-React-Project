import * as request from "./mainRequester";
import environment from "../environments/environment";

const COMMENTS_URL = environment.apiUrlComments;

const create = (furnitureId, text) =>
  request.post(COMMENTS_URL, { furnitureId, text });

const getAllComments = (furnitureId) => {
  const params = new URLSearchParams({
    where: `furnitureId="${furnitureId}"`,
    load: `author=_ownerId:users`,
  });
  console.log(`${COMMENTS_URL}?${params.toString()}`);

  const result = request.get(`${COMMENTS_URL}?${params.toString()}`);

  return result;
};

const commentsAPI = {
  create,
  getAllComments,
};

export default commentsAPI;
