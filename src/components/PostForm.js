import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories-action';
import { Field, reduxForm } from 'redux-form';
import { isEmpty } from 'lodash';

class PostForm extends Component {
  componentDidMount() {
    if (isEmpty(this.props.categories)) {
      this.props.fetchCategories();
    }
  }

  render() {
    const { categories, handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <Field name="body" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <Field name="author" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <div>
            <Field name="category" component="select" className="form-control">
              {
                categories.map(category => (
                  <option key={category.id} value={category}>{category.name}</option>
                ))
              }
            </Field>
          </div>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    );
  }
}

PostForm = reduxForm({
  form: 'contact'
})(PostForm);

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

function mapStateToProps({categories}) {
  return {
    categories: Object.values(categories)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
