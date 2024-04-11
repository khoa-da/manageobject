import instance from "./axios-custom";

const fetchAllUsers = (page) => {
  return instance.get(`api/users?page=${page}`);
};
console.log(fetchAllUsers);

const createUser = (name, job) => {
  return instance.post("api/users", { name, job });
};
export { fetchAllUsers, createUser };
