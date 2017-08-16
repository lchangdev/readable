import PostTable from './PostTable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPosts } from '../actions/posts-action';
import { Link } from 'react-router-dom';

class PostPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  onClickDelete(event, post) {
    event.preventDefault();

    this.props.deletePost(this.props.post[0]);

    this.props.history.push('/');
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <Link to="/">back</Link>
        <h1>Post Page</h1>
        <PostTable
          fullDetails={true}
          posts={post}
          onClickDelete={this.onClickDelete.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  return {
    post: Object.values(posts).filter(post => (
      post.id === ownProps.match.params.id
    ))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (post) => dispatch(deletePost(post)),
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
