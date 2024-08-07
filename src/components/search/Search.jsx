import style from "./Search.module.css";
import { useState } from "react";
import { searchFurniture } from "../../api/furnitureAPI";
import { useForm } from "../../hooks/useForm";
import Furniture from "../catalog/furniture/Furniture";

export default function Search() {
  const [data, setData] = useState([]);
  const initialValues = {
    text: "",
  };

  const searchHandler = async ({ text }) => {
    try {
      if (!text) {
        return;
      }
      const data = await searchFurniture(text);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    searchHandler
  );

  return (
    <div className={style.allContent}>
      <div className={style.container}>
        <form className={style.searchBar} onSubmit={submitHandler}>
          <h1 className={style.title}>Search</h1>
          <input
            type="text"
            name="text"
            placeholder="Search by name"
            value={formValues.text}
            onChange={changeHandler}
            required
          />
          <button className={style.position}>Search</button>
        </form>
      </div>

      <div className={style.resultFurniture}>
        {data.map((post) => (
          <Furniture key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}
