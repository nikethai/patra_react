import axios from "axios";
import { axiosBaseType } from "../axiosBase";
import { axiosInstance } from "../axiosIntercept";


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
  axiosBase.post(`${LoginPath}`, userInfo, config).then(resp => {
    sessionStorage.setItem("token", resp.headers.authorization);
    // console.log(resp.headers);
  });
};
