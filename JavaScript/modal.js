import { createBtn, createElement } from "./utilities-ui.js";

export const modalDelete = () => {
  const modalHtml = document.getElementById("content-modal");
  const containerModal = createElement("div", "container-modal");
  const contentModal = createElement("section", "content-modal");
  const btnConfirmDelete = createBtn("delete");
  const cancelDelete = createBtn("cancel");
  containerModal.append(contentModal);
  contentModal.append(btnConfirmDelete, cancelDelete);
  modalHtml.append(containerModal);
  return containerModal;
};
