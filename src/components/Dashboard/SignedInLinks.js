import React from 'react';
import {NavLink} from 'react-router-dom';
import { Component } from 'react';
import fire from '../../config/fire';
import {Button} from 'reactstrap';
class SignedInLinks extends Component{
	constructor(props){
			super(props);
			this.logout = this.logout.bind(this);
		}

		logout(){
			fire.auth().signOut();
		}
		render(){
	return(
			<ul className="right">
				<li><Button onClick={this.logout} className="btn btn-danger">Salir</Button></li>
			</ul>
		)
	}
}

export default SignedInLinks;