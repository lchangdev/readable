import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class CommentForm extends Component {
  render() {
    return (
      <form onSubmit={ this.props.handleSubmit }>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <Field
            className="form-control"
            component="input"
            name="author"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Comment</label>
          <Field
            className="form-control"
            component="textarea"
            name="body"
            type="text"
          />
        </div>
        <button type="submit" className="btn">add comment</button>
      </form>
    );
  }
}

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm);

export default connect()(CommentForm)
