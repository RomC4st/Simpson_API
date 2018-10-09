import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateEmployee from './GenerateEmployee';
import DisplayEmployee from './DisplayEmployee';

const  sampleEmployee = 
  
  {
      character:"Homer Simpson",
      quote:"Oh, so they have Internet on computers now!",
      image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  }
  


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      employee:  sampleEmployee
    };
  }
  getEmployee() {
    // Récupération de l'employé via fetch
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=9')
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee:  data[0],
        });
    });
}
  render() {
    return (
      <div className="App">
        
        
        <DisplayEmployee  employee={this.state.employee}  />
        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />

      </div>
    );
  }
}

export default App;
