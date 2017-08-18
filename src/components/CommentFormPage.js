import CommentForm from './CommentForm';
import React, { Component } from 'react';
import { capitalize, head } from 'lodash';
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
      postId,
      updateComment
    } = this.props;

    comment ? updateComment(values) : createComment(values, postId);

    return {
      history,
      postId
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
  const postId = queryString.parse(ownProps.location.search).postId;
  const commentId = queryString.parse(ownProps.location.search).commentId;
  let comment;

  if (commentId) {
    comment = head(Object.values(comments).filter(comment => comment.id === commentId));
  }

  return {
    comment,
    postId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createComment: (data) => dispatch(createComment(data)),
    fetchComments: () => dispatch(fetchComments()),
    updateComment: (data) => dispatch(updateComment(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormPage);
