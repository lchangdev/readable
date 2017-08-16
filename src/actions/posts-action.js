import * as API from '../api/api';

export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_POSTS = 'GET_POSTS';
export const NEW_POST = 'NEW_POST';

function editPost(post) {
  return {
    type: EDIT_POST,
    post
  }
}

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

function removePost(post) {
  return {
    type: DELETE_POST,
    post
  }
}

export const createPost = (post) => dispatch => {
  return API
    .createPost(post)
    .then((data) => {
      dispatch(newPost(data));
    });
}

export const deletePost = (post) => dispatch => {
  return API
    .deletePost(post)
    .then((data) => {
      dispatch(removePost(data));
    });
}

export const fetchPosts = () => dispatch => {
  return API
    .fetchPosts()
    .then(data => dispatch(getPosts(data)));
}

export const updatePost = (post) => dispatch => {
  return API
    .editPost(post)
    .then((data) => {
      dispatch(editPost(data));
    });
}
