import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, deletePost, increment } from '../actions/posts-action';
import { withRouter } from 'react-router-dom';
import Tablesort from 'tablesort';

class PostTable extends Component {
  componentDidMount() {
    new Tablesort(document.getElementById('post-table'));
  }

  decrement(event, post) {
    event.stopPropagation();

    this.props.decrement(post);
  }

  increment(event, post) {
    event.stopPropagation();

    this.props.increment(post);
  }

  redirectShow(event, post) {
    event.preventDefault();

    this.props.history.push(`/${post.category}/${post.id}`);
  }

  redirectEdit(event, post) {
    event.stopPropagation();

    this.props.history.push(`/post-form/edit?postId=${post.id}`);
  }

  onClickDelete(event, post) {
    event.stopPropagation();

    this.props.deletePost(post, this.props.history);
  }

  render() {
    return (
      <table className="table table-hover" id="post-table">
        <thead>
          <tr>
            <th className="center pointer">author</th>
            <th className="center pointer">title</th>
            <th className="center pointer">category</th>
            <th className="center pointer">comment count</th>
            <th className="center pointer">timestamp</th>
            <th className="center pointer">vote score</th>
            <th />
            <th />
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {
            this.props.posts.map(post => (
              <tr
                key={post.id}
                className="center pointer"
                onClick={(event) => this.redirectShow(event, post)}
              >
                <td>{post.author}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.commentCount}</td>
                <td>{dateFormat(post.timestamp, 'fullDate')}</td>
                <td>{post.voteScore}</td>
                <td className="pointer" onClick={(event) => this.increment(event, post)}>&#43;</td>
                <td className="pointer" onClick={(event) => this.decrement(event, post)}>&minus;</td>
                <td><a onClick={(event) => this.redirectEdit(event, post)}>edit</a></td>
                <td><a onClick={(event) => this.onClickDelete(event, post)}>delete</a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    decrement: (post) => dispatch(decrement(post)),
    deletePost: (post, history) => dispatch(deletePost(post, history)),
    increment: (post) => dispatch(increment(post)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(PostTable));
