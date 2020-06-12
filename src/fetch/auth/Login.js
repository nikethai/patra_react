import axios from "axios";
import { axiosBaseType } from "../axiosBase";

const axiosBase = axiosBaseType("auth");
const LoginPath = "/login";
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
  axiosBase
    .post(`${LoginPath}`, userInfo, config)
    .then((resp) => {
      sessionStorage.setItem("token", resp.token);
        // console.log(resp);
    })
};
