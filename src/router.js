//Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Teachers from './components/Teachers';
import Courses from './components/Courses';

import CSS from './components/courses/CSS';
import HTML from './components/courses/HTML';
import JavaScript from './components/courses/JavaScript';


//Routes
const routes = (
	<Router history={browserHistory}>
		<route component={App}>
			<Route path="/" component={Home} />
			<Route path="about" component={About} />
			<Route path="teachers" component={Teachers} />

			<Route path="courses" component={Courses}>
				<IndexRedirect to="HTML" />
				<Route path="CSS" component={CSS} />
				<Route path="HTML" component={HTML} />
				<Route path="JavaScript" component={JavaScript} />
			</Route>
		</route>
	</Router>
);

export default routes;