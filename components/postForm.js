const postForm = () => {
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

  const userIdControl = document.createElement("div");
  userIdControl.classList.add("form-control");
  postFormElement.append(userIdControl);

  const userIdLabel = document.createElement("label");
  userIdLabel.textContent = "User ID:";
  userIdLabel.setAttribute("for", "userId");
  userIdControl.append(userIdLabel);

  const userIdInput = document.createElement("input");
  userIdInput.type = "number";
  userIdInput.id = "userId";
  userIdInput.name = "userId";
  userIdInput.required = true;
  userIdControl.append(userIdInput);

  const submitButton = document.createElement("button");
  //   submitButton.type = "submit";
  submitButton.textContent = "Create Post";
  postFormElement.append(submitButton);

  return postFormElement;
};

export default postForm;
