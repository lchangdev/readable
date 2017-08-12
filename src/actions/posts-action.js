import * as API from '../api/api';

export const GET_POSTS = 'GET_POSTS';

function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  };
}

export const fetchPosts = () => dispatch => {
  return API
    .fetchPosts()
    .then(data => dispatch(getPosts(data)));
}
