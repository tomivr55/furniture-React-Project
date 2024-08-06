import { useEffect, useState } from "react";
import commentsAPI from "../api/commentsAPI";

export function useCreateComment() {
  const createHandler = (furnitureId, comment, username) =>
    commentsAPI.create(furnitureId, comment, username);

  return createHandler;
}

export function useGetAllFurnitureComments(furniruteId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await commentsAPI.getAllComments(furniruteId);

      setComments(result);
    })();
  }, [furniruteId]);
  return [comments, setComments];
}
