import { getPosts } from "./api/posts.js";
import postsList from "./components/postsList.js";
import navigationElement from "./navigationElement.js";

const init = async () => {
  const content = document.querySelector("#content");

  const navigation = navigationElement();
  content.append(navigation);

  const posts = await getPosts();

  const postsListElement = postsList(posts);
  content.append(postsListElement);
};

init();
