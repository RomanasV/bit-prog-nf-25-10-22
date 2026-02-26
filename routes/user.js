import { getUser } from "../api/users.js";
import userContent from "../components/userContent.js";
import navigationElement from "../components/navigationElement.js";
import { getUrlParams } from "../utils/urlParams.js";

const init = async () => {
  const userId = getUrlParams("user-id");

  const pageContent = document.querySelector("#content");

  const navigation = navigationElement();
  pageContent.append(navigation);

  const userData = await getUser(userId);
  const userElement = userContent(userData);
  pageContent.append(userElement);
};

init();
