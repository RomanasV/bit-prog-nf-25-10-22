import { updatePost } from "../api/posts.js";
import { getUsers } from "../api/users.js";

const editPostForm = async (data) => {
  const { title, body, userId, id } = data;

  const postFormElement = document.createElement("form");
  postFormElement.classList.add("post-form");

  const titleControl = document.createElement("div");
  titleControl.classList.add("form-control");
  postFormElement.append(titleControl);

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  titleLabel.setAttribute("for", "title");
  titleControl.append(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.value = title;
  titleInput.required = true;
  titleControl.append(titleInput);

  const bodyControl = document.createElement("div");
  bodyControl.classList.add("form-control");
  postFormElement.append(bodyControl);

  const bodyLabel = document.createElement("label");
  bodyLabel.textContent = "Content:";
  bodyLabel.setAttribute("for", "body");
  bodyControl.append(bodyLabel);

  const bodyInput = document.createElement("textarea");
  bodyInput.id = "body";
  bodyInput.name = "body";
  bodyInput.required = true;
  bodyInput.value = body;
  bodyControl.append(bodyInput);

  const userControl = document.createElement("div");
  userControl.classList.add("form-control");
  postFormElement.append(userControl);

  const userLabel = document.createElement("label");
  userLabel.textContent = "User:";
  userLabel.setAttribute("for", "user");
  userControl.append(userLabel);

  const userSelect = document.createElement("select");
  userSelect.id = "user";
  userSelect.name = "user";
  userControl.append(userSelect);

  const users = await getUsers();

  users.forEach((user) => {
    const userOption = document.createElement("option");
    userOption.value = user.id;
    userOption.textContent = user.name;
    userSelect.append(userOption);
  });

  userSelect.value = userId;

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Edit Post";
  postFormElement.append(submitButton);

  postFormElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const body = bodyInput.value;
    const userId = userSelect.value;

    const postData = {
      title,
      body,
      userId,
      id,
    };

    const postResponse = await updatePost(postData);

    const postResponseMessage = document.createElement("p");
    postResponseMessage.textContent = `Post (${postResponse.id}) edited successfully.`;
    postFormElement.append(postResponseMessage);
  });

  return postFormElement;
};

export default editPostForm;
