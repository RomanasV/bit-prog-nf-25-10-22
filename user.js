import { getUser } from "./api/users.js";
import userContent from "./components/userContent.js";
import navigationElement from "./navigationElement.js";

const init = async () => {
  const urlSearch = location.search;
  const urlSearchParams = new URLSearchParams(urlSearch);
  const userId = urlSearchParams.get("user-id");

  const pageContent = document.querySelector("#content");

  const navigation = navigationElement();
  pageContent.append(navigation);

  const userData = await getUser(userId);
  const userElement = userContent(userData);
  pageContent.append(userElement);
};

init();
