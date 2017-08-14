import { forEach, isEmpty } from 'lodash';
import { EDIT_POST, GET_POSTS, NEW_POST } from '../actions/posts-action';

export const posts = (state = {}, action) => {
  switch(action.type) {
    case EDIT_POST:
      let post;

      if (isEmpty(state)) {
        post = action.post;
      } else {
        post = Object.values(state).map(post => {
          if (post.id === action.post.id){
            return { ...post, ...action.post }
          }

          return post
        });
      }

      return post;

    case GET_POSTS:
      if (isEmpty(state)) {
        const initialState = {};

        forEach(action.posts, (post, index) => {
          initialState[index] = post;
        });

        return initialState;
      }

      return state;

    case NEW_POST:
      return {
        ...state,
        [state.length]: action.post
      }

    default:
      return state;
  }
}
