import { useContext, useEffect, useState } from "react";
import Furniture from "../catalog/furniture/Furniture";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import * as furnitureAPI from "../../api/furnitureAPI";
import { AuthenticationContext } from "../../contexts/AuthContext";

export default function Home() {
  const [latestFurniture, setLatestFurniture] = useState([]);
  const { isAuthenticated, username } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const data = await furnitureAPI.getAllFurnitures();
      setLatestFurniture(data.reverse().slice(0, 3));
    })();
  }, []);

  return (
    <div className={style.allContent}>
      <div className={style.container}>
        <div className={style.text}>
          <h1 className={style.mainTitle}>
            COMMERCIAL ADVICE ON FURNITURE THAT WILL SUIT YOUR HOME, GARDEN AND
            WORKPLACE
          </h1>
          <hr></hr>
          <p>
            Furniture is an integral part of any interior - it informs the
            design and creates the environment within the workplace.
          </p>
          {!isAuthenticated && (
            <p>
              If you want to show your furniture, please
              <Link className={style.link} to={"/login"}>
                Login.
              </Link>
            </p>
          )}
          {isAuthenticated && <p>Welcome {username} enjoy our website.</p>}
        </div>
        <div>
          <img className={style.homePic} src="/home1.png" alt="pic" />
        </div>
      </div>
      <div className={style.lastFurniture}>
        {latestFurniture.map((post) => (
          <Furniture key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}
