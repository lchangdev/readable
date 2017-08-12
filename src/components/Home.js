import Categories from './Categories';
import Posts from './Posts';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <Categories />
        <Posts />
      </div>
    );
  }
}

export default connect()(Home);
