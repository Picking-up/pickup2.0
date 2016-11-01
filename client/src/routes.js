import React from 'react';
import { Route, IndexRoute } from 'react-router';

//material U-i
import  injectTapEventPlugin  from 'react-tap-event-plugin';

// import routes here
import App from './components/App';
import Landing from './components/Landing';
import Home from './components/Home';
import Map from './components/Map';
import Post from './components/Post';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

//material-ui
injectTapEventPlugin();

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="home" component={Home} />
    <Route path="post" component={Post} />
    <Route path="SignIn" component={SignIn} />
    <Route path="SignUp" component={SignUp} />
  </Route>

);
