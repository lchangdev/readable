import PostTable from './PostTable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts-action';
import { Link } from 'react-router-dom';
import { sortBy } from 'lodash';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return(
      <div>
        <h1>Posts</h1>
        <Link to="/post/new">Add new post</Link>
        <PostTable posts={posts} />
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  let filteredPosts = Object.values(posts);

  if (ownProps.category) {
    filteredPosts = filteredPosts.filter(post => {
      return post.category === ownProps.category
    });
  }

  return {
    posts: sortBy(filteredPosts, (post) => -post.voteScore)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
