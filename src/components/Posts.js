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
    const { category, posts } = this.props;

    return(
      <div>
        <h1>Posts</h1>
        <Link to="/post-form/new">Add new post</Link>
        <p className="lead">Click on the headers to sort or click on a row to view full details</p>
        <PostTable
          category={category}
          posts={posts}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let filteredPosts = Object.values(state.posts).filter(post => {
    return post ? !post.deleted : post;
  });

  return { posts: sortBy(filteredPosts, (post) => -post.voteScore) };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
