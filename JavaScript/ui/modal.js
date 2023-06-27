import { createBtn, createElement, createText } from "../utilities-ui.js";

export const modalHtml = document.getElementById("content-modal");
export const modalDelete = () => {
  $(modalHtml).addClass("hidden");

  const contentModal = createElement("section", "content-modal");
  const title = createElement("h2", "title-modal");
  $(title).text("Delete comment");
  const textModal = createText(
    "Are you sure want to delete this comment? This will remove the comment and can't be undone",
    "txtModal"
  );
  const contentBtn = createElement("div", "conten-btn");
  const doNotDelete = createBtn("NO, CANCEL");
  $(doNotDelete).addClass("btn-no-delete");
  contentModal.btnNoCancel = doNotDelete;
  const btnEliminate = createBtn("YES, DELETE");
  $(btnEliminate).addClass("btn-yes-delete");
  contentModal.cancel = btnEliminate;

  $(contentModal).append(title, textModal, contentBtn);
  $(contentBtn).append(doNotDelete, btnEliminate);
  $(modalHtml).append(contentModal);
  return contentModal;
};
