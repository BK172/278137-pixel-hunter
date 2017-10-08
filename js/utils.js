const getElementFromTemplate = (str) => {
  const newElem = document.createElement(`div`);

  newElem.insertAdjacentHTML(`afterbegin`, str);

  return newElem;
};

export default getElementFromTemplate;
