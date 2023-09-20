import axios from "../utils/request";

export const longInKey = () => {
  return axios({
    url: "api/login/qr/key",
    method: "post",
  });
};

export const qrCreate = (key) => {
  return axios({
    url: `api/login/qr/create?key=${key}&qrimg=1`,
    method: "post",
  });
};

export const qrCheck = (key) => {
  return axios({
    url: `api/login/qr/check?key=${key}`,
    method: "post",
  });
};
