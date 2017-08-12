import { forEach, isEmpty } from 'lodash';
import { GET_POSTS } from '../actions/posts-action';

export const posts = (state = {}, action) => {
  switch(action.type) {
    case GET_POSTS:
      if (isEmpty(state)) {
        const initialState = {};

        forEach(action.posts, (post, index) => {
          post.id = index;

          initialState[index] = post;
        });

        return initialState;
      }

      return state;
    default:
      return state;
  }
}
