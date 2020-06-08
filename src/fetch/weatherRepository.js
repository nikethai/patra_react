import {axiosBase} from "./axiosBase";

const resource = "/weatherforecast";

export default {
  get() {
    return axiosBase.get(`${resource}`);
  },
  getPost(id) {
    return axiosBase.get(`${resource}/${id}`);
  },
  create(payload) {
    return axiosBase.post(`${resource}`, payload);
  },
  update(payload, id) {
    return axiosBase.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return axiosBase.delete(`${resource}/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
