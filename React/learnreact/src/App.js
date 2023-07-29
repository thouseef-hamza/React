import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import React, { Component } from 'react';
import { Greet } from './components/greet';
import Welcome from './components/welcome';
// function Apps() {
//   return (
//     <div className="App">
//       <Greet></Greet>
//     </div>
//   );
// }

// export default App;

class App extends Component{
  render() {
    return (
      <div className='App'>
        <Hello />
        <Welcome />
      </div>
    )   // # JSX Type
    return React.createElement(
      'div', null, 
      React.createElement('h1', {id:'hello',className:'dummyClass'},'thousi'))
    
  }
}
export default App
