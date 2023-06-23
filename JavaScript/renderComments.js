import createCard from "./card/card.js";
import { validationReplies } from "./funcionality/validation.js";
import { uiRenderComments } from "./ui/ui.js";

export const renderComments = (comentario) => {
  const card = createCard(comentario);
  const containerCard = uiRenderComments(card);

  // const sectionCommentary = addSectionComment(comentario);

  if (comentario.replies.length > 0) {
    comentario.replies.forEach((comentarioReplica) => {
      const cardReply = renderCommentsReply(
        comentarioReplica,
        containerCard.replies
      );
      containerCard.replies.append(cardReply);
    });
  }
  validationReplies(card, comentario, containerCard);

  // if (comentario.replica) {
  //   containerCardReplies.append(commentReply);
  //   containerCard.append(containerCardReplies);
  // }

  // containerCard.commentary = sectionCommentary;
  // // containerCard.contentBtn = card;
  // renderComments.containerCardReplies = containerCardReplies;
  return containerCard;
};

export const renderCommentsReply = (comentario,containerCard) => {
  const card = createCard(comentario);

  validationReplies(
    card,
    comentario,
    containerCard
  );
  return card;
};
