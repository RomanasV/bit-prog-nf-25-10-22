import { COMMENTS_URL } from "../config/api.js";

export const getComment = async (id) => {
  const res = await fetch(`${COMMENTS_URL}/${id}`);
  const comment = await res.json();
  return comment;
};

export const getComments = async () => {
  const res = await fetch(`${COMMENTS_URL}`);
  const comments = await res.json();
  return comments;
};

export const createComment = async (data) => {
  const res = await fetch(`${COMMENTS_URL}`, {
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
  await fetch(`${COMMENTS_URL}/${id}`, {
    method: "DELETE",
  });
};
