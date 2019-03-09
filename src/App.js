import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Saludo from './components/saludo';
import Despedida from './components/Despedida';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      sensei:{
        name:'Gera',
        age:26,
        nac:'Mexican'
      }
    }
  }


  render() {
    return (
      <div className="App">
        <Saludo miNombre="Zerch" edad="31"/>
        <Form></Form>
      </div>
    );
  }
  
}

function getSensei(){
  const sensei={
    nameSensei: 'Danyparc', 
    ageSensei: 23,
    nacSensei:'Mexican'
  }
  return sensei
}

export default App;
