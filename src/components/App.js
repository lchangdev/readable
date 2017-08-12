import Category from './Category';
import Home from './Home';
import PostForm from './PostForm';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col-sm-10 col-sm-offset-1">
          <Route exact path="/" component={Home} />
          <Route path="/category/:id" component={Category} />
          <Route path="/post/form" component={PostForm} />
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(App));
