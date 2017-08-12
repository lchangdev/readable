import Posts from './Posts';
import React, { Component } from 'react';
import { capitalize, head, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories-action';
import { Link } from 'react-router-dom';

class CategoryPage extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    let { category } = this.props;

    if (isEmpty(category)) {
      return (<div>Loading</div>)
    }

    return(
      <div className="category">
        <Link to="/">back</Link>
        <h1>
          {capitalize(category.name)} Category
        </h1>

        <Posts category={category.name} />
      </div>
    );
  }
}

function mapStateToProps({categories, posts}, ownProps) {
  const category = head(Object.values(categories).filter(category => (
    category.id === parseInt(ownProps.match.params.id, 10)
  )));

  return {
    posts: Object.values(posts).filter(post => (
      post.category === category.name
    )),
    category
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
