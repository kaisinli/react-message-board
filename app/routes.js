import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Main from './components/presentational/Main';
import CreateNewPost from './components/containers/CreateNewPost';
import SinglePost from './components/containers/SinglePost'
import { getPost } from './reducers/allMessagesReducer'

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main} />
        <Route path='/newpost' component={CreateNewPost} />
        <Route path='/posts/:id' component={SinglePost}/>
      </Router>
    )
  }
}

export default (Routes)
