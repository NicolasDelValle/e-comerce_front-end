import axiosInstance from "./axios";

async function getProducts() {
  const products = await axiosInstance({
    method: "get",
    url: "/products",
  });
  return products;
}

async function getProduct(slug) {
  const product = await axiosInstance({
    method: "get",
    url: "/products/" + slug,
  });
  console.log(product);
  return product;
}

export { getProducts, getProduct };
