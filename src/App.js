import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';

class App extends Component{

  render(){
    return (
      <div>        
        <Main />
      </div>
    );
  }
}

export default App;
