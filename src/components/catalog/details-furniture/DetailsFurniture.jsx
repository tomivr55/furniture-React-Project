import style from "./DetailsFurniture.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useGetOneFurniture } from "../../../hooks/useFurniture";
import { useParams } from "react-router-dom";
import { AuthenticationContext } from "../../../contexts/AuthContext";
import { useForm } from "../../../hooks/useForm";
import {
  useCreateComment,
  useGetAllFurnitureComments,
} from "../../../hooks/useComments";
import * as furnitureAPI from "../../../api/furnitureAPI";

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
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { formValues, changeHandler, submitHandler } = useForm(
    initialValues,
    async ({ comment }) => {
      if (!comment) {
        setError(`${username} you cannot send an empty comment!`);
        return;
      }

      if (comment.length < 10) {
        setError("Comments must be at least 10 characters!");
        return;
      }

      try {
        const newComment = await createComment(furnitureId, comment, username);
        setComments((oldComments) => [...oldComments, newComment]);
        setError("");
      } catch (err) {
        console.log(err.message);
      }
    }
  );

  const deleteFurniture = async () => {
    try {
      await furnitureAPI.deleteFurniture(furnitureId);
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userId);

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
        {isAuthor && (
          <div className={style.detailsButtons}>
            <Link className={style.button} to={`/edit/${furniture._id}`}>
              Edit
            </Link>
            <Link className={style.button} onClick={deleteFurniture} to="">
              Delete
            </Link>
          </div>
        )}

        <div className={style.furnitureComment}>
          <h1 className={style.detailsTitle}>Comments:</h1>

          {comments.map((oneComment) => (
            <p key={oneComment._id} className={style.whd}>
              {oneComment.username} said: {oneComment.text}
            </p>
          ))}
          {comments.length === 0 && <p className={style.whd}>No comment...</p>}
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

          {error && (
            <div className={style.info}>
              <p className={style.error}>{error}</p>
            </div>
          )}
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
