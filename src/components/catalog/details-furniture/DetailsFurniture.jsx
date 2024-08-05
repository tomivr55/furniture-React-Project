import style from "./DetailsFurniture.module.css";
import { useContext } from "react";
import { useGetOneFurniture } from "../../../hooks/useFurniture";
import { useParams } from "react-router-dom";
import { AuthenticationContext } from "../../../contexts/AuthContext";
import { useForm } from "../../../hooks/useForm";
import {
  useCreateComment,
  useGetAllFurnitureComments,
} from "../../../hooks/useComments";

const initialValues = {
  comment: "",
};

export default function DetailsFurniture() {
  const { furnitureId } = useParams();
  const [comments, setComments] = useGetAllFurnitureComments(furnitureId);
  const createComment = useCreateComment();
  const [furniture] = useGetOneFurniture(furnitureId);
  const { isAuthenticated, username, userId } = useContext(
    AuthenticationContext
  );

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    async ({ comment }) => {
      try {
        const newComment = await createComment(furnitureId, comment);
        setComments((oldComments) => [...oldComments, newComment]);
      } catch (err) {
        console.log(err.message);
      }
    }
  );

  const isAuthor = userId === furniture._ownerId;

  return (
    <div className={style.detailsContent}>
      <div className={style.furnitureDetails}>
        <h1 className={style.detailsTitle}>{furniture.name}</h1>

        <div className={style.detailInfo}>
          <div className={style.detailsText}>
            <p className={style.whd}>Height: {furniture.height} </p>
            <p className={style.whd}>Width: {furniture.width}</p>
            <p className={style.whd}>Deepth: {furniture.depth}</p>
            <p className={style.whd}>Made from: {furniture.material}</p>
          </div>
          <div className={style.line}></div>
          <div className={style.detailsPic}>
            <img
              className={style.detailsImg}
              src={furniture.imgUrl}
              alt={furniture.name}
            />
          </div>
        </div>
        <div className={style.detailsDescriotion}>
          <p className={style.whd}>Description: {furniture.description}</p>
        </div>
        <div className={style.detailsButtons}>
          <a className={style.button} href="">
            Edit
          </a>
          <a className={style.button} href="">
            Delete
          </a>
        </div>
        <div className={style.furnitureComment}>
          <h2>Comments:</h2>

          {comments.map((oneComment) => (
            <p key={oneComment._id} className={style.whd}>
              {oneComment.author.username}: {oneComment.text}
            </p>
          ))}

          {comments.length === 0 && <p className={style.whd}>No comment</p>}
        </div>
      </div>
      {isAuthenticated && (
        <div className={style.furnitureDetails}>
          <h1 className={style.detailsTitle}>Add comments</h1>
          <form onSubmit={submitHandler}>
            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={changeHandler}
              value={formValues.comment}
            ></textarea>
            <button className={style.button} type="submit">
              Add Comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// name X
// width X
// height X
// depth X
// madeFrom X
// imgUrl X
// description
