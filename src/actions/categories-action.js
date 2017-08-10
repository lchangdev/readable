import * as API from '../api/api';

export const GET_CATEGORIES = 'GET_CATEGORIES'

/**
 * @private
 * @name getCategories
 * @description Action creator that is only used when fetching categories
 *              from the API
 *              Actions:
 *              Actions in Redux are JavaScrxipt objects that you set up to
 *              describe any event in your application that should update
 *              your application's state
 *              Actions are just JavaScript objects
 */
function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

/**
 * @name fetchCategories
 * @description Makes a request to API for all the categories and then
 *              dispatches getCategories action with the new payload
 */
export const fetchCategories = () => dispatch => {
  return API
    .fetchCategories()
    .then(data => dispatch(getCategories(data)))
};
