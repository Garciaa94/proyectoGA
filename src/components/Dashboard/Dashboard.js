import React, {Component} from "react";
import fire from '../../config/fire';
import database from '../../config/database';
import {Button} from 'reactstrap';
import Post from './Post';
import Load_Post from './Load_Post';
import {Route, Switch} from "react-router";
import Navbar from './Navbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import _ from 'lodash';

	
	class Dashboard extends Component{
	

		render(){
			return(
				<div className="dashboard container">
				<Navbar/>
				<div className="row">
					<div className="col s12 m6">
					<Post />
					<div><br/></div>
					<div>
						<Load_Post />
					</div>
					</div>
				</div>
				</div>
				);
	}
}


export default Dashboard;