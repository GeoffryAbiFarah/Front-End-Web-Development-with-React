import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { Component } from 'react';
import Menu from './components/Menu';
import {DISHES} from './shared/dishes';

class App extends Component{

constructor(props){
  super(props);

  this.state = {
    dishes: DISHES
  }
}

  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="contsainer">
            <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    )
  }
}

export default App;
