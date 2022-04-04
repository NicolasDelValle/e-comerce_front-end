import { useSelector } from "react-redux";
import axiosInstance from "./axios";

async function getAdresses(newToken) {
  const adresses = await axiosInstance({
    method: "get",
    url: "adress",
    headers: { Authorization: `Bearer ${newToken}` },
  });
  return adresses;
}

async function postAdress(adress, newToken) {
  try {
    await axiosInstance({
      method: "post",
      url: "adress",
      data: adress,
      headers: { Authorization: `Bearer ${newToken}` },
    });
  } catch (err) {
    console.log(err);
  }
}

export { getAdresses, postAdress };
