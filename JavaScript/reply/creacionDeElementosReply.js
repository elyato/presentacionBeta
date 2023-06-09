// import { createElement, createAvatar, createBtn } from "../utilities-ui.js";
// import createInputCommentary from "./contentCommentary.js";

// export const sectionAddComentary = (image, username, isReply = true) => {
//   const imageCurrentUser = currentUser.image.png;
//   const contentCommentary = createElement("div", "content-card");
//   contentCommentary.classList.add("hidden");
//   contentCommentary.classList.add("clase-prueba");
//   const photoUser = createAvatar(image);

//   const aside = createElement("aside", "avatar-commentary");
//   aside.append(photoUser);
//   let txtBoton = "REPLY";

//   if (isReply == false) {
//     txtBoton = "SEND";
//     contentCommentary.classList.remove("hidden");
//   }
//   const buttonReply = createBtn(txtBoton);

//   const validation = buttonReply.btn;
//   validation.disabled = true;

//   let arrobaUsername = "";
//   if (isReply) {
//     arrobaUsername = `@${username}, `;
//   }

//   const divTextArea = createInputCommentary(arrobaUsername);

//   const txtComentario = divTextArea.textArea;

//   contentCommentary.append(aside, divTextArea, buttonReply);

//   txtComentario.addEventListener("keyup", () => {
//     if (txtComentario.value == arrobaUsername || txtComentario.value <= 40) {
//       validation.disabled = true;
//     } else {
//       validation.disabled = false;
//     }
//     const value = txtComentario.value.trim();

//     if (value === "" && event.key === " ") {
//       event.preventDefault();
//     }
//   });
//   buttonReply.addEventListener("click", () => {
//     const comentario = {
//       id: 3,
//       content: txtComentario.value,
//       createdAt: "JUST NOW",
//       score: 0,
//       replyingTo: username,
//       user: {
//         image: {
//           png: imageCurrentUser,
//           webp: imageCurrentUser,
//         },
//         username,
//       },
//       replies: [],
//     };
//     const cardReply = renderComentaryReply(comentario);
//     contentCommentary.innerHTML = "";
//     contentCommentary.classList.remove("content-card");
//     contentCommentary.append(cardReply);
//     // txtComentario.value = "";
//     //   //validacion del boton Reply

//     validation.disabled = true;
//   });

//   return contentCommentary;
// };
