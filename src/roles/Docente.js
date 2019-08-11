import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import '../roles/VistaRoles.css';

class Docente extends Component {
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
          <div class="panel-heading">
            <h3 class="panel-title">
              Vista Docente
            </h3>
          </div>
          <div class="panel-body">
          <h4 class="panel-Salir"><Link to="/" class="btn btn-primary">Salir</Link></h4>
            <div class="menu-doc">
            <h4><Link to="/create" class="btn btn-primary">Reservar laboratorio</Link></h4>
            </div>
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
      </div>
    );
  }
}

export default Docente;
