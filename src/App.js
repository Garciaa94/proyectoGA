import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './Global/Header/Header';
import Content from './Global/Content/Content';
import Footer from './Global/Footer/Footer';
import items from './data/menu';
import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Dashboard/Navbar';
import fire from './config/fire';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      user: {}
    };
  }
componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }else{
        this.setState({user: null});
      }
    });
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render(){
    const {children} = this.props;
    return (
        <div className="App">
        {this.state.user ? (Navbar):(<Header items={items}/>)}
        <Content body={this.state.user ? (<Dashboard/>):(children)}/>
        <Footer/>
        </div>
      );
  }
}


export default App;
