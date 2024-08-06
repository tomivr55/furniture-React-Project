import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import style from "./EditFurniture.module.css";
import { useGetOneFurniture } from "../../hooks/useFurniture";
import * as furnitureAPI from "../../api/furnitureAPI";
const initialValues = {
  name: "",
  width: "",
  height: "",
  depth: "",
  material: "",
  imgUrl: "",
  description: "",
};

export default function EditFurniture() {
  const { furnitureId } = useParams();
  const [furniture, setFurniture] = useGetOneFurniture(furnitureId);
  const navigate = useNavigate();

  const { formValues, changeHandler, submitHandler } = useForm(
    Object.assign(initialValues, furniture),
    async (values) => {
      const updateFurniture = await furnitureAPI.updateFurniture(
        furnitureId,
        values
      );
      navigate(`/catalog/${furnitureId}`);
    }
  );

  return (
    <>
      <div className={style.container}>
        <form className={style.box} onSubmit={submitHandler}>
          <h1 className={style.addTitle}>Edit Furniture</h1>
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
          <button>Edit</button>
        </form>
      </div>
    </>
  );
}
