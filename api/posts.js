import { POSTS_URL } from "../config/api.js";

export const getPost = async (id) => {
  const res = await fetch(`${POSTS_URL}/${id}`);
  const post = await res.json();

  return post;
};

export const getPosts = async () => {
  const res = await fetch(`${POSTS_URL}`);
  const posts = await res.json();
  return posts;
};

export const createPost = async (data) => {
  const res = await fetch(`${POSTS_URL}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  const post = await res.json();
  return post;
};

export const updatePost = async (postData) => {
  const res = await fetch(`${POSTS_URL}/${postData.id}`, {
    method: "PUT",
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const updatedPost = await res.json();
  return updatedPost;
};

export const deletePost = async (id) => {
  await fetch(`${POSTS_URL}/${id}`, {
    method: "DELETE",
  });
};
