import { sectionAddComentary } from "./card/commentary.js";
import { comentarios, currentUser } from "./comments.js";
import { createComment } from "./create-comment.js";
comentarios.forEach(createComment);

const contentHome = document.getElementById("content-home");
const youProfile = sectionAddComentary(
  currentUser.image.png,
  currentUser.username,
  false
);
contentHome.append(youProfile);
