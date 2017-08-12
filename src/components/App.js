import CategoryPage from './CategoryPage';
import HomePage from './HomePage';
import PostFormPage from './PostFormPage';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col-sm-10 col-sm-offset-1">
          <Route exact path="/" component={HomePage} />
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/post/:action" component={PostFormPage} />
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(App));
