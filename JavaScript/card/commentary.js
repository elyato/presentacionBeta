import { renderCommentsReply } from "../renderComments.js";
import { createElement, createAvatar, createBtn } from "../utilities-ui.js";
import createTextareaComment from "./contentCommentary.js";
import action from "../data/acciones.js";
import { commentLocal } from "../module/infoLocalStorage.js";
import { createNewCommentary } from "./createNewComment.js";

export const sectionAddComentary = (
  image,
  username,
  actionBtn = action.reply,
  id,
  containerCard
) => {
  const contentCommentary = createElement("div", "content-card");
  sectionAddComentary.divCommentary = contentCommentary;
  const photoUser = createAvatar(image);
  const inputHidden = createElement("input");
  inputHidden.setAttribute("type", "hidden");
  sectionAddComentary.inputHidden = inputHidden;

  const aside = createElement("aside", "avatar-commentary");
  aside.append(photoUser);
  let txtBoton = action.reply;

  if (actionBtn == action.send) {
    txtBoton = action.send;
  }
  const buttonReply = createBtn(txtBoton);

  const validation = buttonReply.btn;
  validation.disabled = true;

  let texto = "";

  if (actionBtn == action.reply) {
    texto = `@${username}, `;
  }

  const divTextArea = createTextareaComment(texto);

  const txtComent = divTextArea.textArea;
  contentCommentary.append(aside, divTextArea, buttonReply);

  txtComent.addEventListener("keyup", () => {
    if (txtComent.value == texto || txtComent.value.trim().length <= 10) {
      validation.disabled = true;
    } else {
      validation.disabled = false;
    }
  });

  buttonReply.addEventListener("click", () => {
    const cardReply = createNewCommentary(
      txtComent.value,
      username,
      actionBtn,
      validation,
      id
    );
    containerCard.replies.append(cardReply);
    contentCommentary.classList.add("hidden");
  });

  return contentCommentary;
};

export const addSectionComment = (comentario) => {
  const { user } = comentario;
  let image, username;

  if (user) {
    image = user.image.png;
    username = user.username;
  }
  return sectionAddComentary(commentLocal.currentUser.image.png, username);
};

export const commentaryReply = (comentario, isReply) => {
  const { id, content, user, createdAt } = comentario;
  const { image, username } = user;

  const replyCommentary = {
    id: id,
    content: content,
    replica: true,
    createdAt,
    score: 0,
    replyingTo: username,
    user: {
      image: {
        png: image.png,
        webp: image.webp,
      },
      username,
    },
    replies: [],
  };
  commentaryReply.id = replyCommentary;

  const renderComment = renderCommentsReply(replyCommentary, isReply);
  if (isReply) return renderComment;
};
