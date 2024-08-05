import style from "./Profile.module.css";
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useAuth";
import { formatDate } from "../../utils/dateUtil";

export default function Profile() {
  const [user, setUser] = useState({});

  const userData = useUser();

  useEffect(() => {
    (async () => {
      const result = await userData();
      setUser(result);
    })();
  }, []);

  return (
    <div className={style.profileCard}>
      <div className={style.profileImg}>
        <img className={style.pic} src={user.avatar} alt={user.username} />
        <hr />
      </div>
      <div className={style.profileInfo}>
        <div className={style.leftSide}>
          <p className={style.personalInfo}>Username:</p>
          <p className={style.personalInfo}>Email:</p>
          <p className={style.personalInfo}>Phone nmber:</p>
          <p className={style.personalInfo}>Register at:</p>
        </div>
        <div className={style.rightSide}>
          <p className={style.personalInfo}>{user.username}</p>
          <p className={style.personalInfo}>{user.email}</p>
          <p className={style.personalInfo}>{user.tel}</p>
          <p className={style.personalInfo}>{formatDate(user._createdOn)}</p>
        </div>
      </div>
    </div>
  );
}
