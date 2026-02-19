export const getComment = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`,
  );
  const comment = await res.json();
  return comment;
};

export const getComments = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const comments = await res.json();
  return comments;
};

export const createComment = async (data) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const comment = await res.json();
  return comment;
};

export const updateComment = () => {};

export const deleteComment = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
    method: "DELETE",
  });
};
