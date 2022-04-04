import axiosInstance from "./axios";

async function getAdresses() {
  const adresses = await axios({
    method: "get",
    url: "adress",
    data: newProduct,
    headers: { Authorization: `Bearer ${newToken}` },
  });
  return adresses;
}

async function postAdress(adress) {
  try {
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}admin/products`,
      data: adress,
      headers: { Authorization: `Bearer ${newToken}` },
    });
  } catch (err) {
    console.log(err);
  }
}

export default { getAdresses, postAdress };
