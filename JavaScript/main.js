import sectionAddComentary, { commentaryReply } from "./card/commentary.js";
import { comentarios, currentUser } from "./comments.js";
import action from "./data/acciones.js";
import { modalDelete, modalHtml } from "./modal.js";
import { renderComments } from "./renderComments.js";
import local from "./module/localStorage.js";
comentarios.forEach(renderComments);

const contentHome = document.getElementById("content-home");
const youProfile = sectionAddComentary(
  currentUser.image.png,
  currentUser.username,
  action.send
);
contentHome.append(youProfile);

const modal = modalDelete();

// const eliminarReplicas = (comentario) => {
//   const { replies } = comentario;
//   const eliminar = renderComentary(replies);

//   // eliminar.replies.length;
//   eliminar.slice(replies, 1);
// };

modal.cancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
  local.delete("comentarios", id);
  // eliminarReplicas(comentario)
});

modal.btnNoCancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
});
