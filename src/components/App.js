import CategoryPage from './CategoryPage';
import CommentFormPage from './CommentFormPage';
import HomePage from './HomePage';
import PostFormPage from './PostFormPage';
import PostPage from './PostPage';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col-sm-10 col-sm-offset-1">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/:category" component={CategoryPage} />
            <Route path="/post-form/:action" component={PostFormPage} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/comment-form/:action" component={CommentFormPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(App));
