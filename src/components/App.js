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
            <Route exact path="/comment-form/:action/:id" component={CommentFormPage} />
            <Route exact path="/post-form/:action" component={PostFormPage} />
            <Route exact path="/:category" component={CategoryPage} />
            <Route exact path="/:category/:post_id" component={PostPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(App));
