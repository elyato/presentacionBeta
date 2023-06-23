import action from "../data/acciones.js";
import { commentLocal } from "../module/infoLocalStorage.js";
import local from "../module/localStorage.js";
import { uiRenderComments } from "../ui/ui.js";
import { generateId } from "../utilities-ui.js";
import { commentaryReply, sectionAddComentary } from "./commentary.js";

export const createNewCommentary = (
  valor,
  username,
  actionBtn,
  validation,
  id
) => {
  const imageCurrentUser = commentLocal.currentUser.image.png;
  const nameUserReply = commentLocal.currentUser.username;
  const newComment = {
    id: generateId(),
    content: valor,
    createdAt: "JUST NOW",
    score: 0,
    replyingTo: username,
    user: {
      image: {
        png: imageCurrentUser,
        webp: imageCurrentUser,
      },
      username: nameUserReply,
    },
    replies: [],
  };

  const validationButtonReplyOSend = actionBtn == action.send ? false : true;

  const cardReply = commentaryReply(newComment, validationButtonReplyOSend);
    
  const contentCommentary = uiRenderComments.replies; 

  const inputHidden = sectionAddComentary.inputHidden;
  inputHidden.value = id;
  contentCommentary.append(cardReply, inputHidden);

  validation.disabled = true;
  local.add("comentarios", newComment, inputHidden.value);
  return cardReply;
};
