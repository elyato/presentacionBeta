import { sectionAddComentary } from "../card/commentary.js";
import acciones from "../data/acciones.js";
import { commentLocal } from "../module/infoLocalStorage.js";
import { modalHtml } from "../ui/modal.js";

export const validationReplies = (card, comentario, containerCard) => {
  card.replyButton.addEventListener("click", () => {
    const addReply = sectionAddComentary(
      commentLocal.currentUser.image.png,
      comentario.user.username,
      acciones.reply,
      comentario.id,
      containerCard
      );
      containerCard.append(addReply);

  });

  card.delete.addEventListener("click", () => {
    console.log("EVENTO DEL DELETE");
    modalHtml.classList.toggle("hidden");
    modalHtml.setAttribute("idEliminar", card.id);
  });

  card.edit.addEventListener("click", () => {
    console.log("EVENTO DEL EDIT");
  });
};
