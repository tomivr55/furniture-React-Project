import style from "./DetailsFurniture.module.css";

export default function DetailsFurniture() {
  return (
    <div className={style.detailsContent}>
      <div className={style.furnitureDetails}>
        <h1 className={style.detailsTitle}>Chair</h1>

        <div className={style.detailInfo}>
          <div className={style.detailsText}>
            <p className={style.whd}>Height: 25cm </p>
            <p className={style.whd}>Width: 50cm</p>
            <p className={style.whd}>Deepth: 70cm</p>
            <p className={style.whd}>Made from: wood, iron</p>
          </div>
          <div className={style.line}></div>
          <div className={style.detailsPic}>
            <img
              className={style.detailsImg}
              src="https://www.raftfurniture.co.uk/media/catalog/product/cache/0138abd0fcf6edc9284837bfb46ecd61/s/o/sol-chair-45x45x85cm-nt-1.0_2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={style.detailsDescriotion}>
          <p className={style.whd}>
            Description: Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Eveniet voluptas veniam officia neque adipisci et animi quis
            voluptate, asperiores nesciunt ex dignissimos, ad nihil deserunt
            ipsam quaerat inventore explicabo sunt?
          </p>
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
          <hr />
          <p className={style.whd}>Pesho: mnogo gotino</p>
          <p className={style.whd}>Pesho: mnogo gotino</p>
          <p className={style.whd}>Pesho: mnogo gotino</p>
        </div>
      </div>
      <div className={style.furnitureDetails}>
        <h1 className={style.detailsTitle}>Add comments</h1>
        <form>
          <textarea name="comment" placeholder="Comment......"></textarea>
          <button className={style.button} type="submit">
            Add Comment
          </button>
        </form>
      </div>
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
