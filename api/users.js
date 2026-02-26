import { USERS_URL } from "../config/api.js";

export const getUser = async (id) => {
  const res = await fetch(`${USERS_URL}/${id}`);
  const user = await res.json();
  return user;
};

export const getUsers = async () => {
  const res = await fetch(`${USERS_URL}`);
  const users = await res.json();
  return users;
};

export const createUser = async (data) => {
  const res = await fetch(`${USERS_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const user = await res.json();
  return user;
};

export const updateUser = async () => {};

export const deleteUser = async (id) => {
  await fetch(`${USERS_URL}/${id}`, {
    method: "DELETE",
  });
};
