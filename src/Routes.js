import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Page404 from "./components/Page404/Page404";
import App from './App';
import fire from './config/fire';

class Routes extends Component {

	
}

const AppRoutes = ()=>
<App>
	<Switch>
		<Route exact path="/About" component={About}/>
		<Route exact path="/Login" component={Login}/>
		<Route exact path="/" component={Home}/>
		<Route component={Page404}/>
	</Switch>
</App>

export default AppRoutes;