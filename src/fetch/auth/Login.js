import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
export default (info) => {
  const userInfo = {
    username: info.username,
    password: info.password,
  };
  axios
    .post(
      `${process.env.REACT_APP_BASE_DOMAIN + process.env.REACT_APP_BASE_AUTH}`,
      userInfo,
      config
    )
    .then((resp) => {
      sessionStorage.setItem("token",resp.data.token);
      //   console.log(resp.data);
    })
    .catch((err) => console.log(err));
};
