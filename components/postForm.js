import { createPost, updatePost } from "../api/posts.js";
import { getUsers } from "../api/users.js";

const postForm = async (data) => {
  const postFormElement = document.createElement("form");
  postFormElement.classList.add("post-form");

  const titleControl = document.createElement("div");
  titleControl.classList.add("form-control");
  postFormElement.append(titleControl);

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Post title:";
  titleLabel.setAttribute("for", "title");
  titleControl.append(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
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

  if (data) {
    const { title, body, userId } = data;

    titleInput.value = title;
    bodyInput.value = body;
    userSelect.value = userId;
  }

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = data ? "Edit Post" : "Create Post";
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
    };

    if (data) {
      postData.id = data.id;
    }

    let postResponse = null;

    if (data) {
      postResponse = await updatePost(postData);
    } else {
      postResponse = await createPost(postData);
      postFormElement.reset();
    }

    const postResponseMessage = document.createElement("p");

    if (data) {
      postResponseMessage.textContent = `Post (${postResponse.id}) edited successfully.`;
    } else {
      postResponseMessage.textContent = `Post (${postResponse.id}) created successfully.`;
    }

    postFormElement.append(postResponseMessage);
  });

  return postFormElement;
};

export default postForm;
