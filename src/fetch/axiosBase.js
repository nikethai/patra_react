import axios from "axios";

const axiosBase = (type) => {
 
  let baseEndpoint = "";
  if (type === "auth") {
    baseEndpoint = `${process.env.REACT_APP_BASE_AUTH}`;
  } else if (type === "fetch") {
    baseEndpoint = `${process.env.REACT_APP_BASE_API}`;
  }
  let instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_DOMAIN + baseEndpoint}`,
  });
  return instance;
};

// export const axiosBase = instance;
export { axiosBase as axiosBaseType };
