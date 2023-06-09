import createCard from "./card/card.js";
import renderComentary from "./card/commentary.js";
import { modalDelete } from "./modal.js";
import { createElement } from "./utilities-ui.js";

export const createComment = (comentario, isReply) => {
  const containerCard = createElement("section", "container-card");
  const containerCardReplies = createElement("section", "container-replies");
  const card = createCard(comentario);
  const commentary = renderComentary(comentario);

  const contentHome = document.getElementById("content-home");

  contentHome.append(containerCard);
  containerCard.append(card, commentary, containerCardReplies);
  // if (comentario.replies.length > 0) {
  //   const prueba = comentario.replies.forEach((e) => createCard(e, true));
  //   containerCardReplies.append(prueba);
  // }

  // if (isReply) {
  //   containerCardReplies.append(card, commentary);
  // }

  containerCard.commentary = commentary;
  // containerCard.contentBtn = card;
  card.replyButton.addEventListener("click", () => {
    commentary.classList.toggle("hidden");
  });

  // iconDelete.id = "btnDelete";
  // iconEdit.id = "btnEdit";
  // const editar = document.getElementById("btnEdit");
  // card.delete.addEventListener("click", () => {
  //   commentary.style.border = "solid red";
  // });

  card.delete.addEventListener("click", () => {
    console.log("EVENTO DEL DELETE");
    modalDelete();
  });

  card.edit.addEventListener("click", () => {
    console.log("EVENTO DEL EDIT");
  });
  return containerCard;
};
