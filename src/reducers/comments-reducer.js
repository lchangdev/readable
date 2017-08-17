import { forEach } from 'lodash';
import {
  FETCH_COMMENTS,
  NEW_COMMENT
} from '../actions/comments-action';

export const comments = (state = {}, action) => {
  switch(action.type) {
    case FETCH_COMMENTS:
      const clone = {};

      forEach(action.comments, comment => clone[comment.id] = comment);

      return clone;

    case NEW_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }

    default:
      return state;
  }
}
