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
    url: "products/" + slug,
  });

  return product;
}

async function getNewRelease() {
  const newReleases = await axiosInstance({
    method: "get",
    url: "/newRelease",
  });

  return newReleases;
}

export { getProducts, getProduct, getNewRelease };
