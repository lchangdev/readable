import * as API from '../api/api';

export const DECREMENT_COMMENT = 'DECREMENT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const INCREMENT_COMMENT = 'INCREMENT_COMMENT';
export const NEW_COMMENT = 'NEW_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const createComment = (comment, id) => dispatch => {
  console.log('comment: ', comment);
  console.log('id: ', id);
  return API
    .createComment(comment, id)
    .then(data => {
      dispatch({
        type: NEW_COMMENT,
        comment: data
      })
    });
}

export const decrement = (comment) => dispatch => {
  return API
    .decrementComment(comment)
    .then(data => {
      dispatch({
        type: DECREMENT_COMMENT,
        comment: data
      })
    });
}

export const deleteComment = (comment) => dispatch => {
  return API
    .deleteComment(comment)
    .then(data => {
      dispatch({
        type: DELETE_COMMENT,
        comment: data
      })
    })
}

export const fetchComments = (postId) => dispatch => {
  return API
    .fetchComments(postId)
    .then(data => {
      dispatch({
        type: FETCH_COMMENTS,
        comments: data
      })
    })
}

export const increment = (comment) => dispatch => {
  return API
    .incrementComment(comment)
    .then(data => {
      dispatch({
        type: INCREMENT_COMMENT,
        comment: data
      })
    });
}

export const updateComment = (comment) => dispatch => {
  return API
    .editComment(comment)
    .then(data => {
      dispatch({
        type: UPDATE_COMMENT,
        comment: data
      })
    })
}
