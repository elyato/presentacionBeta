import { comentarios } from "./comments.js";
import localStorage from "./module/localStorage.js";
if (localStorage.get("comentarios") == null) {
    localStorage.save("comentarios", comentarios);
}

export const commentLocal = localStorage.get("comentarios");