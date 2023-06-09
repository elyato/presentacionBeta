import { createBtn, createElement, createText } from "./utilities-ui.js";

export const modalHtml = document.getElementById("content-modal");
export const modalDelete = () => {
  modalHtml.classList.add("hidden");

  const contentModal = createElement("section", "content-modal");
  const title = createElement("h2", "title-modal");
  title.textContent = "Delete comment";
  const textModal = createText(
    "Are you sure want to delete this comment? This will remove the comment and can't be undone",
    "txtModal"
  );
  const contentBtn = createElement("div", "conten-btn");
  const btnConfirmDelete = createBtn("NO,   CANCEL");
  btnConfirmDelete.classList.add("btn-no-delete");
  const cancelDelete = createBtn("YES, DELETE");
  contentModal.cancel = cancelDelete;

  contentModal.append(title, textModal, contentBtn);
  contentBtn.append(btnConfirmDelete, cancelDelete);
  modalHtml.append(contentModal);
  return contentModal;
};
