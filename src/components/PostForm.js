import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
  render() {
    return(
      <div>
        <h1>Post Form</h1>
      </div>
    );
  }
}

export default connect()(PostForm);
