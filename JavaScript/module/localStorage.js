import { elimina } from "../main.js";

const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
function removeLocalstorage(key, id) {
  const element = getLocalStorage(key) ? getLocalStorage(key) : [];
  // element.filter((x) => x.id == id);

  element.indexOf(id);
  element.splice(elimina, 1);
  console.log(element, "sobre X");
}
const addItem = (key, value) => {
  const element = getLocalStorage(key) != null ? getLocalStorage(key) : [];
  element.push(value);

  saveLocalStorage(key, element);
  return element;
};

export default {
  save: saveLocalStorage,
  get: getLocalStorage,
  delete: removeLocalstorage,
  add: addItem,
};
