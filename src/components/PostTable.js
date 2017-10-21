import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../actions/posts-action';
import { Link } from 'react-router-dom';
import Tablesort from 'tablesort';

class PostTable extends Component {
  componentDidMount() {
    new Tablesort(document.getElementById('post-table'));
  }

  decrement(event, post) {
    event.preventDefault();

    this.props.decrement(post);
  }

  increment(event, post) {
    event.preventDefault();

    this.props.increment(post);
  }

  render() {
    const { fullDetails } = this.props;

    return (
      <table className="table" id="post-table">
        <thead>
          <tr>
            <th className="center pointer">author</th>
            <th className="center pointer">title</th>
            <th className="center pointer">category</th>
            <th className="center pointer">comment count</th>
            <th className="center pointer">vote score</th>
            <th />
            <th />
            <th className="center pointer">
              {
                fullDetails && 'timestamp'
              }
            </th>
            { fullDetails && <th /> }
            { fullDetails && <th /> }
          </tr>
        </thead>
        <tbody>
          {
            this.props.posts.map(post => (
              <tr key={post.id} className="center">
                <td>{post.author}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.commentCount}</td>
                <td>{post.voteScore}</td>
                <td className="pointer" onClick={(event) => this.increment(event, post)}>&#43;</td>
                <td className="pointer" onClick={(event) => this.decrement(event, post)}>&minus;</td>
                <td>
                  {
                    fullDetails ?
                      dateFormat(post.timestamp, 'fullDate') :
                      (<Link to={`/post/${post.id}`}>view</Link>)
                  }
                </td>
                {
                  fullDetails &&
                    <td>
                      <Link to={`/post-form/edit?postId=${post.id}`}>edit</Link>
                    </td>
                }

                {
                    fullDetails &&
                    <td>
                      <a onClick={(event) => this.props.onClickDelete(event)}>delete</a>
                    </td>
                }
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
    increment: (post) => dispatch(increment(post)),
  }
}

export default connect(null, mapDispatchToProps)(PostTable);
