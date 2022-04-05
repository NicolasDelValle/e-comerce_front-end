import axiosInstance from "./axios";

async function getUserOrders(newToken) {
  const adresses = await axiosInstance({
    method: "get",
    url: "address",
    headers: { Authorization: `Bearer ${newToken}` },
  });
  return adresses;
}

async function postOrder(productList, adress, totalPrice, newToken) {
  try {
    await axiosInstance({
      method: "post",
      url: "orders",
      data: { productList, adress, totalPrice },
      headers: { Authorization: `Bearer ${newToken}` },
    });
  } catch (err) {
    console.log(err);
  }
}

export { getUserOrders, postOrder };
