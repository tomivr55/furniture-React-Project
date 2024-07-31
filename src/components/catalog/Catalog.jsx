import style from "./Catalog.module.css";
import Furniture from "./furniture/Furniture";

export default function Catalog() {
  return (
    <div className={style.allFurniture}>
      <Furniture />
      <Furniture />
      <Furniture />
      <Furniture />
      <Furniture />
      <Furniture />
      <Furniture />
      <Furniture />
    </div>
  );
}
