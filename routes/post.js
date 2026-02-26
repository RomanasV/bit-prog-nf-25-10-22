import { getPost } from "../api/posts.js";
import postContent from "../components/postContent.js";
import navigationElement from "../components/navigationElement.js";
import { getUrlParams } from "../utils/urlParams.js";

const init = async () => {
  const postId = getUrlParams("post-id");

  const pageContent = document.querySelector("#content");

  const navigation = navigationElement();
  pageContent.append(navigation);

  const postData = await getPost(postId);
  const postElement = postContent(postData);
  pageContent.append(postElement);
};

init();
