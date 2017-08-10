import reducer from '../reducers/reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

/**
 * @name store
 * @description Redux state is all in the store
 *              Data is typically stored as an object
 *              Low level functions include:
 *              `getState()` which returns the current state in the store
 *              `dispatch(<action object>)` passes it to the reducer functions
 *              and updates to the store can only be triggerd by dispatch
 *              actions
 *              `subscribe(<listener function>)` which called whenever state
 *              changes and helps connect React comopnents to the store
 *              Takes in enhancer functions such as `applyMiddleware`
 */
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
