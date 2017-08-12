import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Posts extends Component {
  render() {
    return(
      <div>
        <h1>Posts</h1>
        <Link to="/post/new">Add new post</Link>
        <table className="table">

        </table>
      </div>
    );
  }
}

export default connect()(Posts);
