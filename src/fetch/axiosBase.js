import axios from "axios";

const axiosBase = (type) => {
  const parseError = (messages) => {
    if (messages) {
      if (messages instanceof Array) {
        return Promise.reject({ messages: messages });
      } else {
        return Promise.reject({ messages: [messages] });
      }
    } else {
      return Promise.reject({ messages: ["An error has occured"] });
    }
  };

  const parseBody = (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      return this.parseError(response.data.messages);
    }
  };

  let baseEndpoint = "";
  if (type === "auth") {
    baseEndpoint = `${process.env.REACT_APP_BASE_AUTH}`;
  } else if (type === "fetch") {
    baseEndpoint = `${process.env.REACT_APP_BASE_API}`;
  }
  let instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_DOMAIN + baseEndpoint}`,
  });

  // request header
  instance.interceptors.request.use(
    (config) => {
      const apiToken = sessionStorage.getItem("token");
      if (apiToken != null) {
        config.headers = { Authorization: "Bearer " + apiToken };
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response parse
  instance.interceptors.response.use(
    (response) => {
      return parseBody(response);
    },
    (error) => {
      console.warn("Error status", error.response.status);
      // return Promise.reject(error)
      if (error.response) {
        return parseError(error.response.data);
      } else {
        return Promise.reject(error);
      }
    }
  );
  return instance;
};

// export const axiosBase = instance;
export { axiosBase as axiosBaseType };
