const createPost = (param) => {
  // const title = param.title;
  // const body = param.body;
  // const userId = param.userId;
  // const id = param.id;

  const { title, body, userId, id } = param;

  if (!title || !id) {
    return "";
  }

  const postWrapper = document.createElement("div");
  postWrapper.classList.add("post-wrapper");

  const postTitle = document.createElement("h1");
  postTitle.textContent = "Title: " + title;
  postWrapper.append(postTitle);

  if (body) {
    const postBody = document.createElement("p");
    postBody.textContent = "Body: " + body;
    postWrapper.append(postBody);
  }

  if (userId) {
    const postUserId = document.createElement("p");
    postUserId.textContent = "User ID: " + userId;
    postWrapper.append(postUserId);
  }

  const postId = document.createElement("p");
  postId.textContent = "ID: " + id;
  postWrapper.append(postId);

  return postWrapper;
};

const pageContent = document.querySelector("#page-content");

const postElement = createPost({
  userId: 1,
  title: "Lorem ipsum dolor sit amet",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
  id: 1,
});

pageContent.append(postElement);

// let num1 = 5;
// let num2 = 10;

// console.log(num1);
// // console.log(num2);

// function test(num1Param, num2Param) {
//   let num1 = 15;

//   console.log(num1);
//   console.log(num1Param);
//   console.log(num2Param);
// }

// test(num1, num2);

// console.log(num1);
