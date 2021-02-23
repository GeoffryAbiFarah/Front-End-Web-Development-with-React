import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="contsainer">
            <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default App;
