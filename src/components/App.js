import Categories from './Categories';
import Category from './Category';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Categories} />
        <Route path="/category/:id" component={Category} />
      </div>
    );
  }
}

export default withRouter(connect()(App));
