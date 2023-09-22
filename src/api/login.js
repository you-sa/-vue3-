import axios from "../utils/request";

// 二维码key
export const longInKey = () => {
  return axios({
    url: "api/login/qr/key",
    method: "post",
  });
};

// key获取二维码
export const qrCreate = (key) => {
  return axios({
    url: `api/login/qr/create?key=${key}&qrimg=1`,
    method: "post",
  });
};
// 检查二维码状态
export const qrCheck = (key) => {
  return axios({
    url: `api/login/qr/check?key=${key}`,
    method: "post",
  });
};
// 电话登录
export const loginCellPhone = (phone, password) => {
  return axios({
    url: `api/login/cellphone?phone=${phone}&password=${password}`,
    method: "post",
  });
};
