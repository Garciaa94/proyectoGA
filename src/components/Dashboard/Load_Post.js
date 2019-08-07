import React, {Component} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import _ from 'lodash';
import database from '../../config/database';
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firebase from 'firebase';
import 'react-quill/dist/quill.snow.css';


class Load_Post extends Component{
	constructor(props, context){
			super(props, context);
			this.state = {
				id: '',
				modal: false,
				title: '',
				body: '',
				posts: {}
			};
			this.onHandleChange = this.onHandleChange.bind(this);
			this.toggle = this.toggle.bind(this);
			this.sendparams = this.sendparams.bind(this);
		}

		calltwo(item, e){
			e.preventDefault();
			this.toggle();
			this.sendparams(this, item);
		}

		sendparams(item, e){
			return this.id = {item};
		}

		toggle() {
    	this.setState({
      	modal: !this.state.modal
    	});
  	}

		onHandleChange(e){
			this.setState({body: e});
		}
	componentDidMount(){
			database.on('value', snapshot=>{
				this.setState({
					posts: snapshot.val()
				});
			});
		}

		handleRemove(key, e) {
    		return firebase.database().ref('posts').child(key).remove();
		}
	
	renderPosts() {
    	return _.map(this.state.posts, (post, key) => {
      	return (
      		<tr key={key}>
      		<td>{post.title}</td>
      		<td>{renderHTML(post.body)}</td>
      		<td><button className="btn btn-danger" onClick={this.handleRemove.bind(this, key)}>Delete</button></td>  
      		<td><button className='btn btn-lg' onClick={this.calltwo.bind(this, key)}>Edit</button></td>
      		</tr>
      );
    });
  }
		
  		render(){
  		let smClose = () => this.setState({ smShow: false });
    	let lgClose = () => this.setState({ lgShow: false });
		return(
			<div align="left">
				<h2>Your Posts</h2>
				<Table>
				<thead className="thead-dark">
				<tr>
				<th>Title Post</th>
				<th>Body Post</th>
				<th></th>
				<th></th>
				</tr>
				</thead>
				<tbody>
				{this.renderPosts()}
				</tbody>
				</Table>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          		<ModalHeader toggle={this.toggle}>Title
				<input type="text"
						value={this.id} 
						name="title" 
						placeholder="Title" 
						onChange={e => {
                		this.setState({ title: e.target.value });
              			}}
              			ref="title"
              			/>
          		</ModalHeader>
          		<ModalBody>
           					<ReactQuill
							modules={Load_Post.modules}
							formats={Load_Post.formats}
							value={this.state.body}	
							placeholder="Body"
							onChange={this.onHandleChange}
							/>
           		</ModalBody>
          		<ModalFooter>
            	<Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            	<Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
			</div>
		)
	}
}


Load_Post.modules={
	toolbar: [[{header: '1'}, {header: '2'}, { font: [] }],
	[{size: []}], ['bold', 'italic','underline','strike', 'blocquote'],
	[{'list': 'ordered'}, {'list': 'bullet'}],
	['link','image','video'],
	['clean'],
	['code-block']
	]
};

Load_Post.formats=[
	'header','font','size',
	'bold','italic','underline',
	'list', 'bullet',
	'link', 'image', 'video', 'code-block'
];	

export default Load_Post;