import { forEach, isEmpty } from 'lodash';
import {
  DECREMENT_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS,
  INCREMENT_COMMENT,
  NEW_COMMENT,
  UPDATE_COMMENT
} from '../actions/comments-action';

export const comments = (state = {}, action) => {
  switch(action.type) {
    case DECREMENT_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }

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

    case INCREMENT_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }

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
