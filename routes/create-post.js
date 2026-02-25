import postForm from "../components/postForm.js";
import navigationElement from "../components/navigationElement.js";

const init = async () => {
  const pageContent = document.querySelector("#page-content");

  const navigation = navigationElement();
  pageContent.append(navigation);

  const postFormElement = await postForm();
  pageContent.append(postFormElement);
};

init();
