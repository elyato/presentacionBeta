import createCard from "./card/card.js";
import { validationReplies } from "./funcionality/validation.js";
import { uiRenderComments } from "./ui/ui.js";

export const renderComments = (comentario) => {
  const card = createCard(comentario);
  const containerCard = uiRenderComments(card);

  if (comentario.replies.length > 0) {
    $.each(comentario.replies, (index, comentarioReplica) => {
      const cardReply = renderCommentsReply(
        comentarioReplica,
        containerCard.replies
      );
      containerCard.replies.append(cardReply);
    });
  }
  validationReplies(card, comentario, containerCard);
  return containerCard;
};

export const renderCommentsReply = (comentario, containerCard) => {
  const card = createCard(comentario);

  validationReplies(card, comentario, containerCard);
  return card;
};
