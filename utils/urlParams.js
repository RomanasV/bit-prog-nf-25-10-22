export const getUrlParams = (paramTitle) => {
  if (!paramTitle) {
    return null;
  }

  const urlSearch = location.search;
  const urlSearchParams = new URLSearchParams(urlSearch);
  const paramValue = urlSearchParams.get(paramTitle);

  return paramValue;
};
