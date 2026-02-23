import { deletePost } from "../api/posts.js";

const postContent = (param) => {
  // const title = param.title;
  // const body = param.body;
  // const userId = param.userId;
  // const id = param.id;

  const { title, body, userId, id } = param;

  if (!title || !id) {
    return "";
  }

  const postWrapper = document.createElement("div");
  postWrapper.classList.add("post-wrapper");

  const postTitle = document.createElement("h1");
  postTitle.textContent = id + ". " + title;
  postWrapper.append(postTitle);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Post";
  postWrapper.append(deleteButton);

  deleteButton.addEventListener("click", () => {
    deletePost(id);
    postWrapper.textContent = "";

    const postDeletedMessage = document.createElement("p");
    postDeletedMessage.textContent = "Post deleted successfully.";
    postWrapper.append(postDeletedMessage);

    const postsLink = document.createElement("a");
    postsLink.textContent = "Go back to posts";
    postsLink.href = "posts.html";
    postWrapper.append(postsLink);
  });

  if (body) {
    const postBody = document.createElement("p");
    postBody.textContent = "Body: " + body;
    postWrapper.append(postBody);
  }

  if (userId) {
    const postUserId = document.createElement("p");
    postUserId.textContent = "User ID: " + userId;
    postWrapper.append(postUserId);
  }

  return postWrapper;
};

export default postContent;
