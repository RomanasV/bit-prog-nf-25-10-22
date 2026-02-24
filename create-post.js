import postForm from "./components/postForm.js";

const init = async () => {
  const pageContent = document.querySelector("#page-content");

  pageContent.textContent = "Loading...";

  const postFormElement = await postForm();
  pageContent.textContent = "";
  pageContent.append(postFormElement);
};

init();
