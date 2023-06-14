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
  const btnCancel = createBtn("NO,   CANCEL");
  btnCancel.classList.add("btn-no-delete");
contentModal.btnNoCancel = btnCancel
  const btnEliminarReplica = createBtn("YES, DELETE");
  btnEliminarReplica.classList.add("btn-yes-delete")
  contentModal.cancel = btnEliminarReplica;

  contentModal.append(title, textModal, contentBtn);
  contentBtn.append(btnCancel, btnEliminarReplica);
  modalHtml.append(contentModal);
  return contentModal;
};
