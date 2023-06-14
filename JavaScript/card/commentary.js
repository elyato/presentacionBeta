import { currentUser } from "../comments.js";
import { renderComments } from "../renderComments.js";
import {
  createElement,
  createAvatar,
  createBtn,
  generateId,
} from "../utilities-ui.js";
import createTextareaComment from "./contentCommentary.js";
import action from "../data/acciones.js";
import local from "../module/localStorage.js";

export const sectionAddComentary = (
  image,
  username,
  actionBtn = action.reply
) => {
  const imageCurrentUser = currentUser.image.png;
  const nameUserReply = currentUser.username;

  const contentCommentary = createElement("div", "content-card");
  contentCommentary.classList.add("hidden");
  const photoUser = createAvatar(image);

  const aside = createElement("aside", "avatar-commentary");
  aside.append(photoUser);
  let txtBoton = action.reply;

  if (actionBtn == action.send) {
    txtBoton = action.send;
    contentCommentary.classList.remove("hidden");
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
    const newComment = {
      id: generateId(),
      content: txtComent.value,
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
    const cardReply = renderComentaryReply(newComment);
    contentCommentary.innerHTML = "";
    contentCommentary.classList.remove("content-card");
    contentCommentary.append(cardReply);

    validation.disabled = true;
    local.prueba("comentarios", newComment);
    // local.save("comentarios", newComment);
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

  // if (comentario.replies.length > 0) {
  //   comentario.replies.forEach((e) => commentaryReply(e, true));
  // }

  return contentCommentary;
};
const renderComentaryReply = (comentario) => {
  const cardReply = commentaryReply(comentario);
  return cardReply;
};

export const commentaryReply = (comentario, isReply) => {
  const { content, user, createdAt } = comentario;
  const { image, username } = user;

  const replyCommentary = {
    id: generateId(),
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

  const renderComment = renderComments(replyCommentary, isReply);

  renderComment.classList.add("reply-container");

  return renderComment;
};
export default renderComentary;
