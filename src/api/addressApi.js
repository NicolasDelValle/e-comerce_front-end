import axiosInstance from "./axios";

async function getAddresses(newToken) {
  const adresses = await axiosInstance({
    method: "get",
    url: "adress",
    headers: { Authorization: `Bearer ${newToken}` },
  });
  return adresses;
}

async function postAddress(adress, newToken) {
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

export { getAddresses, postAddress };
