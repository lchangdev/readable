import * as API from '../api/api';

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const NEW_COMMENT = 'NEW_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const createComment = (comment, postId) => dispatch => {
  return API
    .createComment(comment, postId)
    .then(data => {
      dispatch({
        type: NEW_COMMENT,
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
