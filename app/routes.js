import React from 'react';
import {Route, DefaultRoute, history} from 'react-router';
import App from './components/App';
import About from './components/About';
import Projects from './components/Projects';

let routes = (
<Route>
  <Route name = "App" path="/" handler = {App}>
  </Route>
</Route>
	);

export default routes;
