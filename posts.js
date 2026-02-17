const init = async () => {
  const content = document.querySelector("#content");

  const posts = await fetchPosts();

  const postsList = postsListComponent(posts);
  content.append(postsList);
};

const fetchPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return posts;
};

const postsListComponent = (data) => {
  const postsListWrapper = document.createElement("div");
  postsListWrapper.classList.add("post-wrapper");

  const postsListTitle = document.createElement("h2");
  postsListTitle.textContent = data.length > 0 ? "Posts:" : "No Posts";
  postsListWrapper.append(postsListTitle);

  if (data.length > 0) {
    const postsList = document.createElement("ul");
    postsListWrapper.append(postsList);

    data.forEach((post) => {
      const { title, id } = post;
      const postElement = document.createElement("li");
      const postLink = document.createElement("a");
      postLink.textContent = id + ". " + title;
      postLink.href = `/post.html?post-id=${id}`;
      postElement.append(postLink);
      postsList.append(postElement);
    });
  }

  return postsListWrapper;
};

init();
