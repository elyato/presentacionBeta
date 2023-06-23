import { modalDelete, modalHtml } from "./ui/modal.js";
import local from "./module/localStorage.js";

export const elimina = (id) => {
  local.delete("comentarios", id);
};
export const deleteCommentary = () => {
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
};
