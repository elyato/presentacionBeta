import { createElement } from "../utilities-ui.js";
import icons from "./svg.js";
import estado from "./estados.js";
export const createVotes = (id, score) => {
  const contentButton = createElement("div", "button-likes");

  const iconMinus = createElement("button", "icon-plus");
  iconMinus.innerHTML = icons.minus;
  iconMinus.onclick = () => {
    let scoreActual = document.getElementById("labelScore-" + id).textContent;
    scoreActual = parseInt(scoreActual);
    const nuevoEstado = reduce(scoreActual, estado.positivo);
    incrementVotes(nuevoEstado, id);
  };
  contentButton.append(iconMinus);

  const totalVotes = createElement("h2", "score-likes");
  totalVotes.setAttribute("id", "labelScore-" + id);
  totalVotes.textContent = score;
  contentButton.append(totalVotes);

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
  iconPLus.innerHTML = icons.plus;
  iconPLus.onclick = () => {
    let scoreActual = document.getElementById("labelScore-" + id).textContent;
    scoreActual = parseInt(scoreActual);
    const nuevoEstado = reduce(scoreActual, estado.negativo);
    incrementVotes(nuevoEstado, id);
  };

  contentButton.append(iconPLus);

  return contentButton;
};

const incrementVotes = (votos, id) => {
  const totalVotesElement = document.getElementById("labelScore-" + id);

  totalVotesElement.textContent = votos;
};
