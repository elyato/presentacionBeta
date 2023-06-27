import { contentInfoUser, createVotes, buttonAction } from "./index.js";
import { createElement, generateId } from "../utilities-ui.js";
import contentBodyCard from "./cardBody.js";

const createCard = (comentario) => {
  const { id, score, user, createdAt, content: descComment } = comentario;
  const { username } = user;

  const contentCard = createElement("article", "content-card");
  const contentCardReplies = createElement("div");
  $(contentCard).attr("id", id);
  contentCard.id = id;

  const contentHeader = contentInfoUser(createdAt, user);
  const btnLikes = createVotes(generateId(id), score, comentario);
  const btnActions = buttonAction(username);

  const contentComment = createElement("section", "content-comment");

  const textComment = contentBodyCard(descComment);

  $(contentHeader).append(btnActions);
  $(contentComment).append(contentHeader, textComment);
  $(contentCard).append(btnLikes, contentComment, contentCardReplies);
  contentCard.replyButton = btnActions.reply;
  contentCard.delete = btnActions.delete;
  contentCard.edit = btnActions.edit;
  contentCard.contentIcons = btnActions.contentIcons;

  return contentCard;
};

export default createCard;
