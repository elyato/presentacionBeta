import { createElement } from "../utilities-ui.js";
import icons from "./svg.js";
import estado from "./estados.js";
import local from "../module/localStorage.js";
export const createVotes = (id, score) => {
  const contentLikes = createElement("aside");

  const contentButton = createElement("div", "button-likes");

  const iconMinus = createElement("button", "icon-plus");
  $(iconMinus).html(icons.minus);
  $(iconMinus).on("click", () => {
    let scoreActual = $(`#labelScore-${id}`).text();
    scoreActual = parseInt(scoreActual);
    const nuevoEstado = reduce(scoreActual, estado.positivo);
    incrementVotes(nuevoEstado, id);
    //const newcommentScore = comentario.score = nuevoEstado;
    // console.log(newcommentScore);
  });

  const totalVotes = createElement("h2", "score-likes");
  $(totalVotes).attr(`id`, `labelScore-${id}`);
  $(totalVotes).text(score);
  contentButton.append(iconMinus, totalVotes);

  const reduce = (state, action) => {
    switch (action) {
      case estado.positivo:
        return (state = state + 1);

      case estado.negativo:
        if (state > 0) {
          return (state = state - 1);
        }
      default:
        return state;
    }
  };

  const iconPLus = createElement("button", "icon-minus");
  $(iconPLus).html(icons.plus);
  iconPLus.onclick = () => {
    let scoreActual = $(`#labelScore-${id}`).text();
    scoreActual = parseInt(scoreActual);
    const nuevoEstado = reduce(scoreActual, estado.negativo);
    incrementVotes(nuevoEstado, id);
  };
  contentButton.append(iconPLus);
  contentLikes.append(contentButton);

  return contentLikes;
};

const incrementVotes = (votos, id) => {
  const valorDelBoton = $(`#labelScore-${id}`).parent().parent().parent()[0].id;
  local.score("comentarios", valorDelBoton, votos);
  return $(`#labelScore-${id}`).text(votos);
};
