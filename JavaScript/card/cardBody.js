import { createElement, createText } from "../utilities-ui.js";

const contentBodyCard = (comentario) => {
  const contentWritten = createElement("article");
  const textComment = createText(comentario, "text-comment");
  contentWritten.append(textComment);
  return contentWritten;
};

export default contentBodyCard;
