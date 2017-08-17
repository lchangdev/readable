import Comments from './Comments';
import PostTable from './PostTable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPosts } from '../actions/posts-action';
import { Link } from 'react-router-dom';
import { head, isEmpty } from 'lodash';

class PostPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  onClickDelete(event, post) {
    event.preventDefault();

    this.props.deletePost(head(this.props.post));

    this.props.history.push('/');
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
        <PostTable
          fullDetails={true}
          posts={posts}
          onClickDelete={this.onClickDelete.bind(this)}
        />
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
    deletePost: (post) => dispatch(deletePost(post)),
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
