import CommentForm from './CommentForm';
import CommentTable from './CommentTable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment, fetchComments } from '../actions/comments-action';
import { sortBy } from 'lodash';

class Comments extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  submit(values) {
    this.props.createComment(values, this.props.postId);
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentTable comments={this.props.comments} />
        <CommentForm onSubmit={this.submit.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps({comments}) {
  let filterComments = Object.values(comments).filter(comment => {
    return comment ? !comment.deleted : comment;
  });

  return {
    comments: sortBy(filterComments, (comment) => -comment.voteScore)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createComment: (comment, postId) => dispatch(createComment(comment, postId)),
    fetchComments: (postId) => dispatch(fetchComments(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
