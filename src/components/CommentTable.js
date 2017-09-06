import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/comments-action';
import { Link } from 'react-router-dom';

class CommentTable extends Component {
  onClickDelete(event, comment) {
    event.preventDefault();

    this.props.deleteComment(comment);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="center">author</th>
            <th className="center">comment</th>
            <th className="center">vote score</th>
            <th className="center">timestamp</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {
            this.props.comments.map(comment => (
              <tr key={comment.id} className="center">
                <td>{comment.author}</td>
                <td>{comment.body}</td>
                <td>{comment.voteScore}</td>
                <td>{dateFormat(comment.timestamp, 'fullDate')}</td>
                <td>
                  <Link to={`/comment-form/edit?postId=${this.props.postId}&commentId=${comment.id}`}>
                    edit
                  </Link>
                </td>
                <td>
                  <a onClick={(event) => this.onClickDelete(event, comment)}>delete</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: (post) => dispatch(deleteComment(post)),
  }
}

export default connect(null, mapDispatchToProps)(CommentTable);
