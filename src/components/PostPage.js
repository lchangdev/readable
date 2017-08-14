import PostTable from './PostTable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts-action';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

class PostPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { post } = this.props;

    if (isEmpty(post)) {
      return (<div>Loading</div>)
    }

    return (
      <div>
        <Link to="/">back</Link>
        <h1>Post Page</h1>
        <PostTable posts={post} fullDetails={true} />
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
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
