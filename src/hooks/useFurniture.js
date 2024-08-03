import { useEffect, useState } from "react";
import * as furnitureAPI from "../api/furnitureAPI";

export function useGetAllFurniture() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await furnitureAPI.getAllFurnitures();
      setFurniture(data);
    })();
  }, []);

  return [furniture, setFurniture];
}

export function useGetOneFurniture(furnitureId) {
  const [furniture, setFurniture] = useState({});

  useEffect(() => {
    (async () => {
      const data = await furnitureAPI.getOneFurniture(furnitureId);
      setFurniture(data);
    })();
  }, [furnitureId]);

  return [furniture, setFurniture];
}
