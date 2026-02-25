import { getUsers } from "../api/users.js";
import navigationElement from "../components/navigationElement.js";
import usersList from "../components/usersList.js";

const init = async () => {
  const content = document.querySelector("#content");

  const navigation = navigationElement();
  content.append(navigation);

  const usersData = await getUsers();
  const usersListElement = usersList(usersData);
  content.append(usersListElement);
};

init();
