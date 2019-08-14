import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

/*/ realidad aumentada

import 'afr/ame-particle-system-component'; // agregada para RA
import 'aframe-environment-component';
import { Scene, Entity } from 'aframe-react';

class BallisticMissile extends Component {

  render() {
      const { pos } = this.props;

      return (
          <Entity geometry={{primitive: 'box', width: .2, height: 1, depth: .2}}
                  material={{roughness: 0, src: require('./texture.jpg')}}
                  scale={{x: 1, y: 1, z: 1}}
                  position={pos}

                  />
      )
  }
}


// prueba realidad aumentada */



class App extends Component {
  
  //***** */ 
 /* state = {
    missile: false,
    launching: false
}

launch = () => {
    this.setState({
        missile: true,
        launching: true,
        missilePos: { x: 0, y: -4, z: 0 },
        missileA: { ax: 0, ay: .005, az: 0 },
        missileV: { vx: 0, vy: 0, vz: 0 }
    });
    if (!this.launched) {
        window.requestAnimationFrame(() => this.gameLoop());
        this.launched = true;
    }
}

gameLoop() {
  const { x, y, z } = this.state.missilePos,
        { vx, vy, vz } = this.state.missileV,
        { ax, ay, az } = this.state.missileA;

  console.log(this.state.missilePos);

  this.setState({
      missilePos: { x: x+vx, y: y+vy, z: z+vz },
      missileV: { vx: vx+ax, vy: vy+ay, vz: vz+az }
  });
  window.requestAnimationFrame(() => this.gameLoop());
}
ender() {
  const skinUrl = 'skins/jetienne.png';
  const { missile, missilePos } = this.state;

  return (
      <div className="App">
          <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>
              <a-marker type="pattern">


                  <Entity minecraft={`heightMeter: 1; skinUrl: ${skinUrl}`}
                          minecraft-head-anim="yes"
                          minecraft-body-anim="hiwave" />
                  <Entity environment="preset: goaland" />
              </a-marker>
              <Entity camera />
          </Scene>
      </div>
  );
}


//****** */


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
      </div>
    );
  }
}

export default App;
