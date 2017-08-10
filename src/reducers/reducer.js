import { combineReducers } from 'redux';

import { categories } from './categories-reducer';

/**
 * @name reducers
 * @description The whole point of a reducer is that it takes in the current
 *              state, an action and returns the new state
 *              A reducer receives the current state and an action that was
 *              dispatched, then decides how to transform the curren state into
 *              a brand new state based on the action it received
 *              Reducers should be pure functions
 *              1. Return one and the same result if the same args are passed in
 *              2. Depend solely on the arguments passed into them
 *              3. Do not produce side effects
 *              Reducers are just JavaScript functions
 */
export default combineReducers({ categories });
