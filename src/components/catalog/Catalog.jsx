import style from "./Catalog.module.css";
import Furniture from "./furniture/Furniture";
import { useGetAllFurniture } from "../../hooks/useFurniture";

export default function Catalog() {
  const [furniture, setFurniture] = useGetAllFurniture();
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
