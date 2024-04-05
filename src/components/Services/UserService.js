import instance from "./axios-custom";

const fetchAllUsers = (page) => {
  return instance.get(`api/users?page=${page}`);
};
console.log(fetchAllUsers);
export { fetchAllUsers };
