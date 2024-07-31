import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <h1>Furniture Forum</h1>
      <div className={style.container}>
        <div className={style.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et,
            eveniet ducimus quia quibusdam quos suscipit totam vero obcaecati
            dolorum. Exercitationem deleniti aliquam dolore eius sed praesentium
            aspernatur. Nisi, facere? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores et, eveniet ducimus quia quibusdam quos
            suscipit totam vero obcaecati dolorum. Exercitationem deleniti
            aliquam dolore eius sed praesentium aspernatur. Nisi, facere?
          </p>
        </div>
        <div className={style.pic}>
          <img className={style.homePic} src="/home.png" alt="pic" />
        </div>
      </div>
    </>
  );
}
