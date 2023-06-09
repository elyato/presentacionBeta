import { createElement } from "../utilities-ui.js";

export const contentInfoUser = () => {
  const header = createElement("article", "content-title-card");
  return header;
};

export const createUserAvatar = (user) => {
  const contentUser = createElement("div", "content-user");

  const photoUser = createElement("img");
  photoUser.src = user.image.png;
  contentUser.append(photoUser);

  const nameUser = createElement("h2");
  nameUser.textContent = user.username;
  contentUser.append(nameUser);

  return contentUser;
};

export const createButtonIcon = (svg, text) => {
  const contentReply = createElement("div", "content-button-icon");

  const iconReply = createElement("button", "icon-button");
  iconReply.innerHTML = svg + text;
  contentReply.append(iconReply);
  contentReply.iconReply = iconReply;
  return contentReply;
};

//pasarala a utilidad  y en cardBody body pasarlar "utilizarla"
