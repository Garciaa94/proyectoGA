import React, {Component} from "react";
import fire from '../../config/fire';
import database from '../../config/database';
import {Button} from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import _ from 'lodash';

class Post extends Component{
			constructor(props){
			super(props);
			this.state = {
				title: '',
				body: '',
				posts: {}
			};
			this.onHandleChange = this.onHandleChange.bind(this);
			this.onHandleSubmit = this.onHandleSubmit.bind(this);
		}

	onHandleChange(e){
			this.setState({body: e});
		}

	 onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    database.push(post);
    this.setState({
      title: '',
      body: ''
    });
  }

  render(){
  	return(
  		<form align="left" onSubmit={this.onHandleSubmit}>
						<div className="form-group">
						<h2>NUEVO FORMULARIO POSTAL</h2>
						<input type="text"
						value={this.state.title} 
						name="title" 
						placeholder="Title" 
						onChange={e => {
                		this.setState({ title: e.target.value });
              			}}
              			ref="title"
              			/>
						</div>
						<div className="form-group">
							<ReactQuill
							modules={Post.modules}
							formats={Post.formats}
							value={this.state.body}	
							placeholder="Body"
							onChange={this.onHandleChange}
							/>
						</div>
						<Button className="btn btn-primary">Agregar</Button>
						</form>
  	);
  }
}



Post.formats=[
	'header','font','size',
	'bold','italic','underline',
	'list', 'bullet',
	'link', 'image', 'video', 'code-block'
];	

export default Post;