import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';
import Footer from './Global/Footer/Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description,horai,horaf, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        horai,
        horaf,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
           
      <div class="container">
        <div class="panel panel-default">
        <div class="Menulist">
            <h3 class="listm">
              Graficacion y Animacion<br></br>
              Menu<br></br>
            </h3>
            <h4><Link to="/alumno" class="btn btn-Alumno"> Alumno </Link></h4> 
            <h4><Link to="/docente" class="btn btn-Docente"> Docente </Link></h4> 
            <h4><Link to="/admin" class="btn btn-Admin"> Administrador </Link></h4>
            <h4><Link to="/login" class="btn btn-Login"> Login </Link></h4>
            <h4><Link to="/cam" class="btn btn-Login"> Camera </Link></h4> 
          </div>


          <div class="panel-heading">
            <h3 class="panel-title">
              Vista General 
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>N° Lab </th>
                  <th>Materia</th>
                  <th>Hora inicio</th>
                  <th>Hora Fin</th>
                  <th>Nombre Profesor</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td>{board.title}</td>
                    <td>{board.description}</td>
                    <td>{board.horai}</td>
                    <td>{board.horaf}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="App-footer">
        <Footer/>
        </div>
      </div>
      
      
    );
  }
  
}

export default App;
