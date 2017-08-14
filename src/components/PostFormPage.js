import PostForm from './PostForm';
import React, { Component } from 'react';
import { capitalize, head } from 'lodash';
import { connect } from 'react-redux';
import { createPost, fetchPosts, updatePost } from '../actions/posts-action';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class PostFormPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  getInitialValues() {
    const { post } = this.props;

    return post ? post : {};
  }

  submit(values) {
    const { createPost, post, updatePost } = this.props;

    post ? updatePost(values) : createPost(values);
  }

  render() {
    return(
      <div className="post-page">
        <Link to="/">back</Link>
        <h1>{capitalize(this.props.match.params.action)} Post</h1>
        <PostForm
          onSubmit={this.submit.bind(this)}
          enableReinitialize
          initialValues={this.getInitialValues()}
        />
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  let postId = queryString.parse(ownProps.location.search).postId;
  let post;

  if (postId) {
    post = head(Object.values(posts).filter(post => post.id === postId));
  }

  return {
    post
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (data) => dispatch(createPost(data)),
    fetchPosts: () => dispatch(fetchPosts()),
    updatePost: (data) => dispatch(updatePost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormPage);
