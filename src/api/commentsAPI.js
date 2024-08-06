import * as request from "./mainRequester";
import environment from "../environments/environment";

const COMMENTS_URL = environment.apiUrlComments;

const create = (furnitureId, text, username) =>
  request.post(COMMENTS_URL, { furnitureId, text, username });

const getAllComments = (furnitureId) => {
  const params = new URLSearchParams({
    where: `furnitureId="${furnitureId}"`,
    load: `author=_ownerId`,
  });

  const result = request.get(`${COMMENTS_URL}?${params.toString()}`);

  return result;
};

const commentsAPI = {
  create,
  getAllComments,
};

export default commentsAPI;
