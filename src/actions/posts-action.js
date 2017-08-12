import * as API from '../api/api';

export const GET_POSTS = 'GET_POSTS';
export const NEW_POST = 'NEW_POST';

function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  };
}

function newPost(post) {
  return {
    type: NEW_POST,
    post
  }
}

export const fetchPosts = () => dispatch => {
  return API
    .fetchPosts()
    .then(data => dispatch(getPosts(data)));
}

export const createPost = (post) => dispatch => {
  return API
    .createPost(post)
    .then((data) => {
      dispatch(newPost(data));
    });
}
