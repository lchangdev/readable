import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tablesort from 'tablesort';

class PostTable extends Component {
  componentDidMount() {
    new Tablesort(document.getElementById('post-table'));
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
            <th className="center pointer">vote score</th>
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
                <td>{post.voteScore}</td>
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

export default PostTable;
