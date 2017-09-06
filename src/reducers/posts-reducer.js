import { forEach } from 'lodash';
import {
  DECREMENT_POST,
  INCREMENT_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
  NEW_POST
} from '../actions/posts-action';

export const posts = (state = {}, action) => {
  switch(action.type) {
    case INCREMENT_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }

    case DECREMENT_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }

    case DELETE_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }

    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }

    case GET_POSTS:
      const clone = {};

      forEach(action.posts, post => clone[post.id] = post)

      return clone;

    case NEW_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }

    default:
      return state;
  }
}
