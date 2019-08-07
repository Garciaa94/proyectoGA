import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import fire from '../../config/fire';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import _ from 'lodash';
import database from '../../config/database';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Home extends Component{
	constructor(props){
			super(props);
			this.state = {
				title: '',
				body: '',
				posts: {}
			};
		}

componentDidMount(){
			database.on('value', snapshot=>{
				this.setState({
					posts: snapshot.val()
				});
			});
		}

renderPosts() {
    	return _.map(this.state.posts, (post, key) => {
      	return (
        <div key={key}>
      	<Card>
        <CardBody>
        <CardTitle><h2>{post.title}</h2></CardTitle>
          <CardText><p align="left">{renderHTML(post.body)}</p></CardText>
          <Button align="left">Comment</Button>
        </CardBody>
      </Card>
    </div>
      );
    });
  }

	render(){
		return(
			<div className='Home'>
				{this.renderPosts()}
				<br/>
				<p>En desarrollo</p>
				<img src="https://cutt.ly/Fww5X5f"/>
			</div>	
		);
	}
}

export default Home;