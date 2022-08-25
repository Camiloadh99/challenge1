import React from "react";

// GET QUERY
const getQueryString = (params: any) => {
  if (!params) return "";
  var esc = encodeURIComponent;
  return Object.keys(params)
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
};

// GET CURRENCY FORMAT
const currencyFormat = (num: number) => {
  return num
    ? `INR ${num
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    : num;
};

// App version
const getAppVersion = () => {
  return "0.0.1";
};

const service = { getQueryString, currencyFormat, getAppVersion };
export default service;
