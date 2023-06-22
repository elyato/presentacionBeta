import { sectionAddComentary } from "./card/commentary.js";
import { comentarios } from "./comments.js";
import action from "./data/acciones.js";
import { modalDelete, modalHtml } from "./modal.js";
import { renderComments } from "./renderComments.js";
import local from "./module/localStorage.js";
import localStorage from "./module/localStorage.js";
import { commentLocal } from "./infoLocalStorage.js";

commentLocal.comments.map((x) => renderComments(x));

const contentHome = document.getElementById("content-home");
const youProfile = sectionAddComentary(
  commentLocal.currentUser.image.png,
  "commentLocal.currentUser.username",
  action.send,
  0
);
contentHome.append(youProfile);

export const elimina = (id) => {
  local.delete("comentarios", id);
};
const modal = modalDelete();
modal.cancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
  const idElimina = modalHtml.getAttribute("idEliminar");
  elimina(idElimina);
  const eliminarCard = document
    .getElementById(idElimina)
    .parentNode.parentNode.remove();
});

modal.btnNoCancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
});
