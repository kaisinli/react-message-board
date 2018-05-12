import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Main from './components/presentational/Main';
import CreateNewPost from './components/containers/CreateNewPost';

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main} />
        <Route path='/newpost' component={CreateNewPost} />
      </Router>
    )
  }
}

export default (Routes)
