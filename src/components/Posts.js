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
        <table className="table">
          <thead>
            <tr>
              <th className="center">author</th>
              <th className="center">title</th>
              <th className="center">category</th>
              <th className="center">vote score</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map(post => (
                <tr key={post.id} className="center">
                  <td>{post.author}</td>
                  <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{post.voteScore}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

function mapStateToProps({posts}) {
  return {
    posts: sortBy(Object.values(posts), (post) => -post.voteScore)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
