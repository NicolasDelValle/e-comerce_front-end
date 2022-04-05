import axiosInstance from "./axios";

async function getAddresses(newToken) {
  const adresses = await axiosInstance({
    method: "get",
    url: "address",
    headers: { Authorization: `Bearer ${newToken}` },
  });
  return adresses;
}

async function postAddress(adress, newToken) {
  try {
    await axiosInstance({
      method: "post",
      url: "address",
      data: adress,
      headers: { Authorization: `Bearer ${newToken}` },
    });
  } catch (err) {
    console.log(err);
  }
}

async function deleteAddress(adressId, newToken) {
  try {
    await axiosInstance({
      method: "post",
      url: "address",
      data: adressId,
      headers: { Authorization: `Bearer ${newToken}` },
    });
  } catch (err) {
    console.log(err);
  }
}

export { getAddresses, postAddress, deleteAddress };
