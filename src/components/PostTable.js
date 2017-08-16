import dateFormat from 'dateformat';
import React from 'react';
import { Link } from 'react-router-dom';

const PostTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th className="center">author</th>
        <th className="center">title</th>
        <th className="center">category</th>
        <th className="center">vote score</th>
        <th className="center">
          {
            props.fullDetails && 'timestamp'
          }
        </th>
        { props.fullDetails && <th /> }
        { props.fullDetails && <th /> }
      </tr>
    </thead>
    <tbody>
      {
        props.posts.map(post => (
          <tr key={post.id} className="center">
            <td>{post.author}</td>
            <td>{post.title}</td>
            <td>{post.category}</td>
            <td>{post.voteScore}</td>
            <td>
              {
                props.fullDetails ?
                  dateFormat(post.timestamp, 'fullDate') :
                  (<Link to={`/post/${post.id}`}>view</Link>)
              }
            </td>
            {
              props.fullDetails &&
                <td>
                  <Link to={`/post-form/edit?postId=${post.id}`}>edit</Link>
                </td>
            }

            {
                props.fullDetails &&
                <td>
                  <a onClick={(event) => props.onClickDelete(event)}>delete</a>
                </td>
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default PostTable;
