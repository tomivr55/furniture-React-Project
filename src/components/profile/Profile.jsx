import { useEffect, useState } from "react";
import * as request from "../../api/mainRequester";

export default function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const result = await request.get("http://localhost:3030/users/me");
      setUser(result);
    })();
  }, []);

  console.log(user);

  return <></>;
}
