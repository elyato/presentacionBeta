import { sectionAddComentary } from "./card/commentary.js";
import action from "./data/acciones.js";
import { commentLocal } from "./module/infoLocalStorage.js";
export const mostrarMiPerfil = () => {
  const myProfile = $("#content-prueba");
  const comment = {
    id: 0,
  };
  const youProfile = sectionAddComentary(
    commentLocal.currentUser.image.png,
    commentLocal.currentUser.username,
    action.send,
    comment,
  );
  myProfile.append(youProfile);
};
