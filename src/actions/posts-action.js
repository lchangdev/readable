import * as API from '../api/api';

export const DECREMENT_POST = 'DECREMENT_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const INCREMENT_POST = 'INCREMENT_POST';
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

export const decrement = (post) => dispatch => {
  return API
    .decrementPost(post)
    .then(data => {
      dispatch({
        type: DECREMENT_POST,
        post: data
      })
    });
}

export const increment = (post) => dispatch => {
  return API
    .incrementPost(post)
    .then(data => {
      dispatch({
        type: INCREMENT_POST,
        post: data
      })
    });
}

export const deletePost = (post, history) => dispatch => {
  return API
    .deletePost(post)
    .then((data) => {
      dispatch(removePost(data));

      history.push('/');
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
