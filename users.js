import { getUsers } from "./api/users.js";
import usersList from "./components/usersList.js";

const init = async () => {
  const content = document.querySelector("#content");

  const usersData = await getUsers();
  const usersListElement = usersList(usersData);
  content.append(usersListElement);
};

init();
