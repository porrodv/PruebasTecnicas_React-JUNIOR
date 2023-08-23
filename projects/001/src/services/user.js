import { getRandomID } from './utils';
import { USERS_ENDPOINT_URL, POSTS_ENDPOINT_URL } from '../constants/const';

export function getRandomUser () {
  const randomID = getRandomID();

  return fetch(`${USERS_ENDPOINT_URL}/filter?key=id&value=${randomID}`)
    .then((res) => res.json())
    .then((data) => {
      const { id, firstName, lastName, username, image } = data.users[0];

      // For copy the complete user data
      // return { ...data.users[0] };
      return { id, firstName, lastName, username, image };
    });
}

export function getPostsByUser ({ id }) {
  return fetch(`${POSTS_ENDPOINT_URL}/user/${id}?limit=100`)
    .then((res) => res.json())
    .then((data) => {
      const { posts } = data;
      return { posts };
    });
}
