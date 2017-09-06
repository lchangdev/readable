import { forEach, isEmpty } from 'lodash';
import {
  DELETE_COMMENT,
  FETCH_COMMENTS,
  NEW_COMMENT,
  UPDATE_COMMENT
} from '../actions/comments-action';

export const comments = (state = {}, action) => {
  switch(action.type) {
    case DELETE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }

    case FETCH_COMMENTS:
      const clone = {};

      if (isEmpty(state)) {
        forEach(action.comments, comment => clone[comment.id] = comment);

        return clone;
      }

      return state;

    case NEW_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }

    case UPDATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }

    default:
      return state;
  }
}
