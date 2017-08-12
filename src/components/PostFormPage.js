import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalize } from 'lodash';
import PostForm from './PostForm';

class PostPage extends Component {
  submit(values) {

  }

  render() {
    return(
      <div className="post-page">
        <h1>{capitalize(this.props.match.params.action)} Post</h1>
        <PostForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect()(PostPage);
