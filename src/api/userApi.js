import axiosInstance from "./axios";

async function getUsers() {
  const users = await axiosInstance({
    method: "get",
    url: "/users",
  });
  return users;
}

export default { getUsers };
