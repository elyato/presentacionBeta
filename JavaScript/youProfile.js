import { sectionAddComentary } from "./card/commentary.js";
import action from "./data/acciones.js";
import { commentLocal } from "./module/infoLocalStorage.js";
export const mostrarMiPerfil = () => {
  const contentHome = document.getElementById("content-home");
  const youProfile = sectionAddComentary(
    commentLocal.currentUser.image.png,
    "commentLocal.currentUser.username",
    action.send,
    0
  );
  contentHome.append(youProfile);
};
