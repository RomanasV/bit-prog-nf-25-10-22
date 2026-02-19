export const getTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo = await res.json();
  return todo;
};

export const getTodos = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await res.json();
  return todos;
};

export const createTodo = async (data) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
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
  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
  });
};
