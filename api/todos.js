import { TODOS_URL } from "../config/api.js";

export const getTodo = async (id) => {
  const res = await fetch(`${TODOS_URL}/${id}`);
  const todo = await res.json();
  return todo;
};

export const getTodos = async () => {
  const res = await fetch(`${TODOS_URL}`);
  const todos = await res.json();
  return todos;
};

export const createTodo = async (data) => {
  const res = await fetch(`${TODOS_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const todo = await res.json();
  return todo;
};

export const updateTodo = () => {};

export const deleteTodo = async (id) => {
  await fetch(`${TODOS_URL}/${id}`, {
    method: "DELETE",
  });
};
