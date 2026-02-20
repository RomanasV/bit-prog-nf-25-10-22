const navigationElement = () => {
  const navigationWrapper = document.createElement("nav");
  navigationWrapper.classList.add("navigation-wrapper");

  const linksList = document.createElement("ul");
  navigationWrapper.append(linksList);

  const menuLinks = [
    { name: "Home", href: "index.html" },
    { name: "Posts", href: "posts.html" },
    { name: "Create Post", href: "create-post.html" },
    { name: "Users", href: "users.html" },
    { name: "Todos", href: "todos.html" },
    { name: "Comments", href: "comments.html" },
  ];

  menuLinks.forEach((link) => {
    const menuItem = document.createElement("li");
    const menuLink = document.createElement("a");
    menuLink.textContent = link.name;
    menuLink.href = link.href;
    menuItem.append(menuLink);
    linksList.append(menuItem);
  });

  return navigationWrapper;
};

export default navigationElement;
