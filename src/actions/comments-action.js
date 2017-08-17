import * as API from '../api/api';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const NEW_COMMENT = 'NEW_COMMENT';

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

export const fetchComments = () => dispatch => {
  return API
    .fetchComments()
    .then(data => {
      dispatch({
        type: FETCH_COMMENTS,
        comments: data
      })
    })
}
