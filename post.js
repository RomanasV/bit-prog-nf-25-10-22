import { getPost } from "./api/posts.js";
import postContent from "./components/postContent.js";
import navigationElement from "./navigationElement.js";

const init = async () => {
  const urlSearch = location.search;
  const urlSearchParams = new URLSearchParams(urlSearch);
  const postId = urlSearchParams.get("post-id");

  const pageContent = document.querySelector("#content");

  const navigation = navigationElement();
  pageContent.append(navigation);

  const postData = await getPost(postId);
  const postElement = postContent(postData);
  pageContent.append(postElement);
};

init();
