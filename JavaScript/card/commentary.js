import { currentUser } from "../comments.js";
import { createComment } from "../create-comment.js";
import { createElement, createAvatar, createBtn } from "../utilities-ui.js";
import createCard from "./card.js";
import createInputCommentary from "./contentCommentary.js";

export const sectionAddComentary = (image, username, isReply = true) => {
  const imageCurrentUser = currentUser.image.png;
  const nameUserReply = currentUser.username;

  const contentCommentary = createElement("div", "content-card");
  contentCommentary.classList.add("hidden");
  const photoUser = createAvatar(image);

  const aside = createElement("aside", "avatar-commentary");
  aside.append(photoUser);
  let txtBoton = "REPLY";

  if (isReply == false) {
    txtBoton = "SEND";
    contentCommentary.classList.remove("hidden");
  }
  const buttonReply = createBtn(txtBoton);

  const validation = buttonReply.btn;
  validation.disabled = true;

  let arrobaUsername = "";
  if (isReply) {
    arrobaUsername = `@${username}, `;
  }

  const divTextArea = createInputCommentary(arrobaUsername);

  const txtComentario = divTextArea.textArea;

  contentCommentary.append(aside, divTextArea, buttonReply);

  txtComentario.addEventListener("keyup", () => {
    if (txtComentario.value == arrobaUsername || txtComentario.value <= 40) {
      validation.disabled = true;
    } else {
      validation.disabled = false;
    }
    const value = txtComentario.value.trim();

    if (value === "" && event.key === " ") {
      event.preventDefault();
    }
  });
  buttonReply.addEventListener("click", () => {
    const comentario = {
      id: 3,
      content: txtComentario.value,
      createdAt: "JUST NOW",
      score: 0,
      replyingTo: username,
      user: {
        image: {
          png: imageCurrentUser,
          webp: imageCurrentUser,
        },
        username: nameUserReply,
      },
      replies: [],
    };
    const cardReply = renderComentaryReply(comentario);
    contentCommentary.innerHTML = "";
    contentCommentary.classList.remove("content-card");
    contentCommentary.append(cardReply);
    // txtComentario.value = "";
    //   //validacion del boton Reply

    validation.disabled = true;
  });

  return contentCommentary;
};

const renderComentary = (comentario, isReply = false) => {
  const { user } = comentario;
  let image, username;
  if (isReply) {
    username = comentario.username;
  }

  if (user) {
    image = comentario.user.image.png;
    username = comentario.user.username;
  }
  //const { image, username } = comentario.user;
  let contentCommentary = sectionAddComentary(currentUser.image.png, username);

  if (comentario.replies.length > 0) {
    comentario.replies.forEach((e) => commentaryReply(e, true));
  }

  return contentCommentary;
};
const renderComentaryReply = (comentario) => {
  const cardReply = commentaryReply(comentario);
  return cardReply;
};

const commentaryReply = (comentario, isReply) => {
  const { content, user, createdAt } = comentario;
  const { image, username } = user;

  const replyCommentary = {
    id: 3,
    content: content,

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

  const renderComment = createComment(replyCommentary, isReply);

  renderComment.classList.add("reply-container");

  return renderComment;
};
export default renderComentary;
