import { sectionAddComentary } from "./card/commentary.js";
import { comentarios, currentUser } from "./comments.js";
import action from "./data/acciones.js";
import { modalDelete, modalHtml } from "./modal.js";
import { renderComments } from "./renderComments.js";
comentarios.forEach(renderComments);

const contentHome = document.getElementById("content-home");
const youProfile = sectionAddComentary(
  currentUser.image.png,
  currentUser.username,
  action.send
);
contentHome.append(youProfile);

// modalDelete();
const modal = modalDelete();

modal.cancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
});
