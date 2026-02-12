const createPost = () => {
  const postWrapper = document.createElement("div");
  postWrapper.classList.add("post-wrapper");

  const postTitle = document.createElement("h1");
  const postBody = document.createElement("p");
  const postUserId = document.createElement("p");
  const postId = document.createElement("p");

  postTitle.textContent = "Title: sunt";
  postBody.textContent = "Body: quia";
  postUserId.textContent = "User ID: 1";
  postId.textContent = "ID: 1";

  postWrapper.append(postTitle, postBody, postUserId, postId);

  return postWrapper;
};

const pageContent = document.querySelector("#page-content");

const postElement = createPost();
pageContent.append(postElement);
