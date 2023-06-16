import createCard from "./card/card.js";
import renderComentary, { commentaryReply } from "./card/commentary.js";
import { modalHtml } from "./modal.js";
import { createElement } from "./utilities-ui.js";
import local from "./module/localStorage.js";
import { elimina } from "./main.js";
export const renderComments = (comentario) => {
  const containerCard = createElement("section", "container-card");
  const containerCardReplies = createElement("section", "container-replies");
  const card = createCard(comentario);
  const commentary = renderComentary(comentario);

  const contentHome = document.getElementById("content-home");

  contentHome.append(containerCard);
  containerCard.append(card, commentary);
  let commentReply;
  if (comentario.replies.length > 0) {
    commentReply = comentario.replies.forEach((comment) => {
      comment.replica = true;
      commentaryReply(comment, true);
    });
  }

  if (comentario.replica) {
    containerCardReplies.append(commentReply);
    containerCard.append(containerCardReplies);
  }

  containerCard.commentary = commentary;
  // containerCard.contentBtn = card;
  card.replyButton.addEventListener("click", () => {
    commentary.classList.toggle("hidden");
  });

  card.delete.addEventListener("click", () => {
    console.log("EVENTO DEL DELETE");
    // modalDelete();

    modalHtml.classList.toggle("hidden");
    modalHtml.setAttribute("idEliminar", card.id);
  });

  card.edit.addEventListener("click", () => {
    console.log("EVENTO DEL EDIT");
  });

  return containerCard;
};
