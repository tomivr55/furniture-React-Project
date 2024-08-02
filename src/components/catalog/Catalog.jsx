import style from "./Catalog.module.css";
import Furniture from "./furniture/Furniture";
import * as furnitureAPI from "../../api/furnitureAPI";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    furnitureAPI.getAllFurnitures().then((result) => setFurniture(result));
  }, []);

  console.log(furniture);

  return (
    <div className={style.allFurniture}>
      {furniture.length > 0 ? (
        furniture.map((post) => <Furniture key={post._id} {...post} />)
      ) : (
        <h2 className={style.empty}>No furniture yet</h2>
      )}
    </div>
  );
}
