import React, {Component} from 'react';
import './App.scss';
import Navk from '../../components/navk/Navk';
import Buttonk from '../../components/buttonk/Buttonk';

class App extends Component {
  render() {
    return <div>
      <Navk></Navk>
      <Buttonk text="hola"></Buttonk>
    </div>
    ;
  }
}

export default App;
