import React, {Component} from "react";
	
	class About extends Component{
		render(){
			return(
				<div className="About">
				<blockquote className="blockquote">
				<p className="mb-0"> Este proyecto fue realizado con reactjs + redux y conectado a una base de datos noSQL (FIREBASE) </p>
				<footer className="blockquote-footer">Dependencias necesarias e instaladas</footer>
				<ul className="list-unstyled">
				<li>redux</li>
				<li>redux-firestore</li>
				<li>react-bootstrap</li>
				<li>react-router</li>
				<li>reactstrap</li>
				<li>react-quill</li>
				<li>react-firestore</li>
				<li>react-redux</li>
				<li>react-render-dom</li>
				<li>react-router-dom</li>
				<li>react-redux-firebase</li>
				<li>firebase</li>
				<li>babel-cli</li>
				<li>babel-loader</li>
				<li>babel-preset-es2015</li>
				<li>babel-preset-stage-2</li>
				<li>webpack</li>
				<li>webpack-dev-server</li>
				</ul>
				</blockquote>
				</div>
				);
	}
}

export default About;