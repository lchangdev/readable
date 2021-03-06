import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment, decrement, increment } from '../actions/comments-action';
import { Link } from 'react-router-dom';
import Tablesort from 'tablesort';

class CommentTable extends Component {
  componentDidMount() {
    new Tablesort(document.getElementById('comment-table'));
  }

  onClickDelete(event, comment) {
    event.preventDefault();

    this.props.deleteComment(comment);
  }

  decrement(event, comment) {
    event.preventDefault();

    this.props.decrement(comment);
  }

  increment(event, comment) {
    event.preventDefault();

    this.props.increment(comment);
  }

  render() {

    return (
      <table className="table" id="comment-table">
        <thead>
          <tr>
            <th className="center pointer">author</th>
            <th className="center pointer">comment</th>
            <th className="center pointer">vote score</th>
            <th />
            <th />
            <th className="center pointer">timestamp</th>
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
                <td className="pointer" onClick={(event) => this.increment(event, comment)}>&#43;</td>
                <td className="pointer" onClick={(event) => this.decrement(event, comment)}>&minus;</td>
                <td>{dateFormat(comment.timestamp, 'fullDate')}</td>
                <td>
                  <Link to={`/comment-form/edit?postId=${this.props.postId}&commentId=${comment.id}`}>
                    edit
                  </Link>
                </td>
                <td>
                  <a className="pointer" onClick={(event) => this.onClickDelete(event, comment)}>delete</a>
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
    decrement: (comment) => dispatch(decrement(comment)),
    increment: (comment) => dispatch(increment(comment)),
  }
}

export default connect(null, mapDispatchToProps)(CommentTable);
