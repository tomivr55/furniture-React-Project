import { useState } from "react";
import style from "./AddFurniture.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useAddFurniture } from "../../hooks/useFurniture";

export default function AddFutniture() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    width: "",
    height: "",
    depth: "",
    material: "",
    imgUrl: "",
    description: "",
  };

  const furnitureAdd = useAddFurniture();

  const addFurnitureHandler = (values) => {
    try {
      furnitureAdd(values);
      navigate(`/catalog`);
    } catch (error) {
      console.log(error.message);
      // setError(error.message);
    }
  };

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    addFurnitureHandler
  );

  return (
    <div className={style.container}>
      <form className={style.box} onSubmit={submitHandler}>
        <h1 className={style.addTitle}>Add Furniture</h1>
        <div className={style.main}>
          <div className={style.left}>
            <input
              type="text"
              name="name"
              placeholder="Name..."
              value={formValues.name}
              onChange={changeHandler}
            />

            <input
              type="number"
              name="width"
              placeholder="Width..."
              value={formValues.width}
              onChange={changeHandler}
            />
            <input
              type="number"
              name="height"
              placeholder="Height..."
              value={formValues.height}
              onChange={changeHandler}
            />
            <input
              type="number"
              name="depth"
              placeholder="Depth..."
              value={formValues.depth}
              onChange={changeHandler}
            />
          </div>
          <div className={style.right}>
            <input
              type="text"
              name="material"
              placeholder="Made from..."
              value={formValues.material}
              onChange={changeHandler}
            />
            <input
              type="text"
              name="imgUrl"
              placeholder="Upload a photo..."
              value={formValues.imgUrl}
              onChange={changeHandler}
            />
            <textarea
              name="description"
              id="description"
              placeholder="Description...."
              value={formValues.description}
              onChange={changeHandler}
            ></textarea>
          </div>
        </div>
        <button>Add</button>
      </form>
      {/* <div className={style.info}>
          <p>
            If you already have an account <Link to="/login">Login</Link>
          </p>
        </div> */}
    </div>
  );
}
