import Comments from './Comments';
import PostTable from './PostTable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts-action';
import { Link } from 'react-router-dom';
import { head, isEmpty } from 'lodash';

class PostPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    if (isEmpty(posts)) {
      return (<div>loading page</div>);
    }

    return (
      <div>
        <Link to="/">back</Link>
        <h1>Post Page</h1>
        <PostTable posts={posts} />
        <Comments postId={head(posts).id} />
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  return {
    posts: Object.values(posts).filter(post => (
      post.id === ownProps.match.params.id
    ))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
