import CommentForm from './CommentForm';
import React, { Component } from 'react';
import { capitalize, head, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { createComment, fetchComments, updateComment } from '../actions/comments-action';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class CommentFormPage extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  getInitialValues() {
    const { comment } = this.props;

    return comment ? comment : {};
  }

  submit(values) {
    const {
      createComment,
      comment,
      history,
      id,
      updateComment
    } = this.props;

    console.log('this.props.id: ', id);
    isEmpty(comment) ? createComment(values, id) : updateComment(values);

    return {
      history,
      id
    };
  }

  render() {
    return(
      <div>
        <Link to="/">back</Link>
        <h1>{capitalize(this.props.match.params.action)} Comment</h1>
        <CommentForm
          onSubmit={this.submit.bind(this)}
          enableReinitialize
          initialValues={this.getInitialValues()}
          postId={this.props.postId}
        />
      </div>
    );
  }
}

function mapStateToProps({comments}, ownProps) {
  const id = ownProps.match.params.id;
  let comment = {};

  if (ownProps.match.params.action === 'edit') {
    comment = head(Object.values(comments).filter(comment => comment.id === id));
  }

  console.log('ownProps.match.params.id: ', ownProps.match.params.id);
  console.log('id: ', id);

  return {
    comment,
    id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createComment: (data, id) => dispatch(createComment(data, id)),
    fetchComments: () => dispatch(fetchComments()),
    updateComment: (data) => dispatch(updateComment(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormPage);
