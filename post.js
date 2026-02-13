//
//
//

//
//
//
//
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
  postTitle.textContent = "Title: " + title;
  postWrapper.append(postTitle);

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

  const postId = document.createElement("p");
  postId.textContent = "ID: " + id;
  postWrapper.append(postId);

  return postWrapper;
};

fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((res) => res.json())
  .then((data) => {
    const pageContent = document.querySelector("#page-content");

    const postElement = postContent(data);

    pageContent.append(postElement);
  });
