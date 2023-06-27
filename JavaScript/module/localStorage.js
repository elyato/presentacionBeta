const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
function removeLocalstorage(key, id) {
  const element = getLocalStorage(key) ? getLocalStorage(key) : [];
  element.comments.find((x) => x.id == 1).replies.splice(0, 1);
  const newElement = element.comments.filter((x) => x.id != id);

  saveLocalStorage("comentarios", element);
}
const addItem = (key, value, idPrincipal) => {
  const element = getLocalStorage(key) != null ? getLocalStorage(key) : [];

  if (idPrincipal != 0) {
    element.comments.find((x) => x.id == idPrincipal).replies.push(value);
  } else {
    element.comments.push(value);
  }
  saveLocalStorage(key, element);
  return element;
};

const saveScoreLocalStorage = (key, id, score) => {
  const origin = getLocalStorage(key);
  origin.comments.map((comment) => {
    if (comment.id == id) {
      comment.score = score;
    } else {
      comment.replies.map((reply) => {
        if (reply.id == id) {
          reply.score = score;
        }
      });
    }
  });
  saveLocalStorage("comentarios", origin);
};
export default {
  save: saveLocalStorage,
  get: getLocalStorage,
  delete: removeLocalstorage,
  add: addItem,
  score: saveScoreLocalStorage,
};
