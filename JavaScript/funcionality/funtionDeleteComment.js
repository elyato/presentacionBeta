import { modalDelete, modalHtml } from "../ui/modal.js";
import local from "../module/localStorage.js";

export const elimina = (id) => {
  local.delete("comentarios", id);
};
export const deleteCommentary = () => {
  const modal = modalDelete();
  $(modal.cancel).on("click", () => {
    $(modalHtml).toggleClass("hidden");
    const idElimina = $(modalHtml).attr("idEliminar");
    elimina(idElimina);
    $(`#${idElimina}`).remove()
  });
  $(modal.btnNoCancel).on("click", () => {
    $(modalHtml).toggleClass("hidden");
  });
};
