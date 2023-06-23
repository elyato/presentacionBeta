import { createElement } from "../utilities-ui.js";

export const uiRenderComments = (card) => {
  const contentHome = document.getElementById("content-home");

  const containerCard = createElement("section", "container-card");
  const containerCardReplies = createElement("section", "container-replies");
  contentHome.append(containerCard);
  containerCard.append(card, containerCardReplies);

  uiRenderComments.replies = containerCardReplies;
    containerCard.replies = containerCardReplies;
  return containerCard;
};
