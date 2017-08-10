import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories-action';
import { forEach } from 'lodash';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return(
      <div className="categories">
        <ul>
          {
            this.props.categories.map(category => (
              <li key={category.name}>{category.name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

/**
 * @name mapStateToProps
 * @description A function that receives the current store, current props and
 *              and what it returns will be available to the Component as props
 *              If this argument is specified, the new component will subscribe
 *              to Redux store updates. This means that any time the store is
 *              updated, `mapStateToProps` will be called
 *              The results of `mapStateToProps` must be a plain object, which
 *              will be merged into the component's props
 *              A param available is the state in which you want to pass to the
 *              component; loaded in the reducers
 *              The param should be wrapped in brackets to normalize data
 *              This is the best place to modify the data since it is connected
 *              to the store and listens for updates
 * @param {Object} categories Categories from the categories reducer
 * @returns {Object} Modified categories object. Redux state should be stored
 *                   as objects whereas the Component data is more easily
 *                   accessible as an array
 */
function mapStateToProps({categories}) {
  return {
    categories: Object.values(categories)
  };
}

/**
 * @name mapDispatchToProps
 * @description Adds fetchCategories action in dispatch function and passed to
 *              component in props
 *              Allows to wrap action creators inside of dispatch
 *              The whole point of `mapDispatchToProps` is to make it so you
 *              can bind `dispatch()` to your action creators before they ever
 *              hit your component
 * @param {Function} dispatch Dispatch function from `react-redux` library
 * @returns {Object} Object accessible in component props that have functions
 *                   for action creators that are dispatched before going to
 *                   the component
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

/**
 * @name connect
 * @description Allows to specify which components should recive which data
 *              from the store
 *              is a function that makes it possible for a component to get
 *              both data and dispatch from the Redux store
 */
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
