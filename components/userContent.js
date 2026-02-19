const userContent = (param) => {
  const userWrapper = document.createElement("div");
  userWrapper.classList.add("user-wrapper");

  const { name, username, email, address, phone, website, company } = param;
  const { street, suite, city, zipcode } = address;

  if (!name || !username || !email) {
    return "";
  }

  const userName = document.createElement("h1");
  userName.textContent = "Name: " + name;
  userWrapper.append(userName);

  const userUsername = document.createElement("p");
  userUsername.textContent = "Username: " + username;
  userWrapper.append(userUsername);

  const userEmail = document.createElement("p");
  userEmail.textContent = "Email: " + email;
  userWrapper.append(userEmail);

  if (street && suite && city && zipcode) {
    const userAddress = document.createElement("p");
    userAddress.textContent =
      "Address: " + street + ", " + suite + ", " + city + ", " + zipcode;
    userWrapper.append(userAddress);
  }

  if (phone) {
    const userPhone = document.createElement("p");
    userPhone.textContent = "Phone: " + phone;
    userWrapper.append(userPhone);
  }

  if (website) {
    const userWebsite = document.createElement("p");
    userWebsite.textContent = "Website: " + website;
    userWrapper.append(userWebsite);
  }

  if (company) {
    const userCompany = document.createElement("p");
    userCompany.textContent = "Company: " + company.name;
    userWrapper.append(userCompany);
  }

  if (company && company.catchPhrase && company.bs) {
    const userCompanyDetails = document.createElement("ul");
    const companyCatchPhrase = document.createElement("li");
    companyCatchPhrase.textContent = "Catch Phrase: " + company.catchPhrase;
    userCompanyDetails.append(companyCatchPhrase);
    const companyBs = document.createElement("li");
    companyBs.textContent = "BS: " + company.bs;
    userCompanyDetails.append(companyBs);
    userWrapper.append(userCompanyDetails);
  }

  return userWrapper;
};

export default userContent;
