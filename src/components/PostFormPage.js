import PostForm from './PostForm';
import React, { Component } from 'react';
import { capitalize } from 'lodash';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts-action';
import { Link } from 'react-router-dom';

class PostPage extends Component {
  submit(values) {
    this.props.dispatch(createPost(values));
  }

  render() {
    return(
      <div className="post-page">
        <Link to="/">back</Link>
        <h1>{capitalize(this.props.match.params.action)} Post</h1>
        <PostForm onSubmit={this.submit.bind(this)} />
      </div>
    );
  }
}

export default connect()(PostPage);
