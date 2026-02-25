import { getPost } from "../api/posts.js";
import editPostForm from "../components/editPostForm.js";
import navigationElement from "../components/navigationElement.js";
import { getUrlParams } from "../utils/urlParams.js";

const init = async () => {
  const content = document.querySelector("#content");

  const navigation = navigationElement();
  content.append(navigation);

  const postId = getUrlParams("post-id");
  const postData = await getPost(postId);

  const postFormElement = await editPostForm(postData);
  content.append(postFormElement);
};

init();
