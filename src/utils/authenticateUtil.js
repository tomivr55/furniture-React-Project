export const getAccessToken = () => {
  const authJSON = localStorage.getItem("authenticate");

  if (!authJSON) {
    return "";
  }

  const authData = JSON.parse(authJSON);
  return authData?.accessToken;
};
