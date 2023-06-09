import {
  createButtonIcon,
  contentInfoUser,
  createUserAvatar,
  createVotes,
} from "./index.js";
import { createElement } from "../utilities-ui.js";
import contentBodyCard from "./cardBody.js";
import icon from "../data/svg.js";
import { currentUser } from "../comments.js";
const createCard = (comentario, isreply = false) => {
  const { id, score, user, createdAt, content } = comentario;

  const contentCard = createElement("article", "content-card");
  const contentCardReplies = createElement("article");
  contentCard.setAttribute("id", id);
  const contentLikes = createElement("aside");

  const contentHeader = contentInfoUser();
  const buttonLikes = createVotes(id, score);
  let iconReply, btnRenderizar;
  iconReply = createButtonIcon(icon.reply, "Reply");
  btnRenderizar = iconReply;
  const contentIcons = createElement("div", "content-icons");
  const iconDelete = createButtonIcon(icon.delete, "DELETE");
  const iconEdit = createButtonIcon(icon.edit, "EDIT");
  contentIcons.append(iconDelete, iconEdit);
  if (currentUser.username == comentario.user.username) {
    btnRenderizar = contentIcons;
  }

  // function handleAction(event) {
  //   const clickedButtonId = event.target.id;
  //   switch (clickedButtonId) {
  //     case "btnDelete":
  //       // Lógica para el botón de delete
  //       console.log("Delete button clicked");
  //       break;
  //     case "btnEdit":
  //       // Lógica para el botón de edit
  //       console.log("Edit button clicked");
  //       break;
  //     default:
  //       break;
  //   }
  // }

  const dateRegister = createElement("p", "text-title-comment");
  dateRegister.textContent = createdAt;

  const contentComment = createElement("section", "content-comment");
  const avatar = createUserAvatar(user);

  const textComment = contentBodyCard(content);

  contentCard.append(contentLikes, contentComment);
  contentLikes.append(buttonLikes);
  contentComment.append(contentHeader, textComment);
  contentHeader.append(avatar, btnRenderizar);
  contentCard.replyButton = iconReply;
  contentCard.delete = iconDelete;
  contentCard.edit = iconEdit;
  contentCard.contentIcons = contentIcons;
  avatar.append(dateRegister);
  return contentCard;
};

export default createCard;
