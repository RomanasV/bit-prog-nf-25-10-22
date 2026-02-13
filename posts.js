const init = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((posts) => {
      const content = document.querySelector("#content");
      const postsList = document.createElement("ul");
      content.append(postsList);

      posts.forEach((post) => {
        const { title, id } = post;

        const postElement = document.createElement("li");
        const postLink = document.createElement("a");
        postLink.textContent = id + ". " + title;
        postLink.href = `/post.html?post-id=${id}`;
        postElement.append(postLink);
        postsList.append(postElement);
      });
    });
};

init();
