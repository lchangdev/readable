import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories-action';
import { isEmpty } from 'lodash';

class Category extends Component {
  componentDidMount() {
    if (isEmpty(this.props.category)) {
      this.props.fetchCategories();
    }
  }

  render() {
    if (isEmpty(this.props.category)) {
      return (<div>Loading</div>);
    }

    return(
      <div className="category">
        <h1>{this.props.category[0].name}</h1>
      </div>
    );
  }
}

function mapStateToProps({categories}, ownProps) {
  return {
    category: Object.values(categories).filter(category => (
      category.id === parseInt(ownProps.match.params.id, 10)
    ))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
