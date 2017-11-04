import CommentTable from './CommentTable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment, fetchComments } from '../actions/comments-action';
import { Link } from 'react-router-dom';
import { sortBy } from 'lodash';

class Comments extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <h3>comments count: {this.props.comments.length === 0 ? 0 : this.props.comments.length }</h3>
        <Link to={`/comment-form/new/${this.props.postId}`}>Add new comment</Link>
        <CommentTable
          comments={this.props.comments}
          postId={this.props.postId}
        />
      </div>
    );
  }
}

function mapStateToProps({comments}, ownProps) {
  let filterComments = Object.values(comments).filter(comment => {
    return comment ? !comment.deleted && comment.parentId === ownProps.postId : comment;
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
