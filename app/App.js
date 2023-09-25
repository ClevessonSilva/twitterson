import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts/:postId" component={PostPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
