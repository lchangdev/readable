import dateFormat from 'dateformat';
import React from 'react';

const CommentTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th className="center">author</th>
        <th className="center">comment</th>
        <th className="center">vote score</th>
        <th className="center">timestamp</th>
      </tr>
    </thead>
    <tbody>
      {
        props.comments.map(comment => (
          <tr key={comment.id} className="center">
            <td>{comment.author}</td>
            <td>{comment.body}</td>
            <td>{comment.voteScore}</td>
            <td>{dateFormat(comment.timestamp, 'fullDate')}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default CommentTable;
