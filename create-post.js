import postForm from "./components/postForm.js";

const init = () => {
  const pageContent = document.querySelector("#page-content");

  const postFormElement = postForm();
  pageContent.append(postFormElement);
};

init();
