export const createElement = (tagName, className, id) => {
  const element = document.createElement(tagName);
  if (className) {
    $(element).addClass(className);
  }
  if (id) {
    $(element).attr("id", id);
  }
  return element;
};

export const createText = (texto, clas) => {
  const text = createElement("p", clas);
  $(text).text(texto);
  return text;
};

export const createAvatar = (image) => {
  const photo = createElement("img");
  photo.src = image;
  return photo;
};

export const createBtn = (text) => {
  const contentBtn = createElement("article", "btn-commentary");
  const btn = createElement("button");
  $(btn).text(text);
  contentBtn.btn = btn;
  contentBtn.append(btn);
  return contentBtn;
};

export const generateId = (id) => {
  const idRandom = Math.random().toString(8).substring(2, 6);

  return idRandom;
};
