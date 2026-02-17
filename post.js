const init = async () => {
  const urlSearch = location.search;
  const urlSearchParams = new URLSearchParams(urlSearch);
  const postId = urlSearchParams.get("post-id");

  const pageContent = document.querySelector("#content");

  const postData = await fetchPost(postId);
  const postElement = postContent(postData);

  pageContent.append(postElement);
};

const fetchPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return post;
};

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

init();
