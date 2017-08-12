import { forEach, isEmpty } from 'lodash';
import { GET_CATEGORIES } from '../actions/categories-action';

/**
 * @name categories
 * @description Gets the redux state from the store based on the action type
 *              NEVER MODIFY THE REDUX STATE
 *              Redux never modifies data, there should always make a copy of
 *              the existing state, modify the copy and then return the new
 *              copied state
 * @param {Object} state Categories state
 * @param {Object} action Determines which action to take on the redux state
 * @returns {Object} Categories state
 */
export const categories = (state = {}, action) => {
  switch(action.type) {
    case GET_CATEGORIES:
      if (isEmpty(state)) {
        const intialState = {};

        forEach(action.categories, (category, index) => {
          category.id = index;

          intialState[index] = category
        });

        return intialState;
      }

      return state;
    default:
      return state;
  }
}
