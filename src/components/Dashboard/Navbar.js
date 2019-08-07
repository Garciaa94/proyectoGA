import React from 'react';
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import SignedInLinks from './SignedInLinks';

const Navbar = () =>{
	return(
			<nav className="nav-wrapper grey darken-3">
				<div className="container">
					<Link to="Dashboard" className="brand-logo">Dashboard</Link>
					<SignedInLinks/>
				</div>
			</nav>
		)
}

export default Navbar;