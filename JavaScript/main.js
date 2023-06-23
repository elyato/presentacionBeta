import { renderComments } from "./renderComments.js";
import { commentLocal } from "./module/infoLocalStorage.js";
import { mostrarMiPerfil } from "./youProfile.js";
import { deleteCommentary } from "./funtionDeleteComment.js";
commentLocal.comments.map((comentario) => renderComments(comentario));
mostrarMiPerfil();
deleteCommentary();
