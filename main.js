import { getComments } from './api.js';
import { formatDateTime } from './formatDateTime.js';
import { formatDateToRu } from './lib/formatDate/formatDate.js';
import { renderComment } from './render.js';
// import { renderLogin } from './renderLogin.js';
export let user = null;
export const setUser = (newUser) => {
  user = newUser;
};
export let comments = [];
export const fetchAndRenderComments = () => {
  getComments().then((responceData) => {
    const appComments = responceData.comments.map((comment) => {
      return {
        name: comment.author.name,
        date: formatDateToRu(new Date(comment.date)),
        text: comment.text,
        likes: comment.likes,
        isLiked: false,
      };
    });
    comments = appComments;
    renderComment();

  });
};

fetchAndRenderComments();




