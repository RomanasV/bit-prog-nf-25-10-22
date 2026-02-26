import { getPost } from "../api/posts.js";
import navigationElement from "../components/navigationElement.js";
import postForm from "../components/postForm.js";
import { getUrlParams } from "../utils/urlParams.js";

const init = async () => {
  const content = document.querySelector("#content");

  const navigation = navigationElement();
  content.append(navigation);

  const postId = getUrlParams("post-id");
  const postData = await getPost(postId);

  const postFormElement = await postForm(postData);
  content.append(postFormElement);
};

init();
