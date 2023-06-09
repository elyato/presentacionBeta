import { createElement, createText } from "../utilities-ui.js";
import icon from "../data/svg.js";
import { currentUser } from "../comments.js";

export const contentInfoUser = (createdAt, user) => {
  const header = createElement("article", "content-title-card");
  const avatar = createUserAvatar(user);

  const dateRegister = createText(createdAt);

  avatar.append(dateRegister);
  header.append(avatar);
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
export const buttonAction = (username) => {
  let iconReply, btnRenderizar;
  iconReply = createButtonIcon(icon.reply, "Reply");
  btnRenderizar = iconReply;
  const contentIcons = createElement("div", "content-icons");
  const iconDelete = createButtonIcon(icon.delete, "DELETE");
  const iconEdit = createButtonIcon(icon.edit, "EDIT");

  contentIcons.append(iconDelete, iconEdit);
  if (currentUser.username == username) {
    btnRenderizar = contentIcons;
  }
  btnRenderizar.reply = iconReply;
  btnRenderizar.delete = iconDelete;
  btnRenderizar.edit = iconEdit;
  btnRenderizar.contentIcons = contentIcons;
  return btnRenderizar;
};
