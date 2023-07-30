import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import React, { Component } from 'react';
import { Greet } from './components/greet';
import Welcome from './components/welcome';
import Todo from './components/Todo';
import Counter from './components/Counter';
import Forms from './components/Forms';
import List from './components/List';
// function Apps() {
//   return (
//     <div className="App">
//       <Greet></Greet>
//     </div>
//   );
// }

// export default App;
class App extends Component {
  state = {
     myString : "Hello Thousi" ,
  }
  handleChange = () => {
    this.setState({
      myString : "Safiya"
    })  // state changing
  }
  render() {
    return (
      <div className='App'>
        {/* <Hello />
        <Welcome />
        <button onClick={this.handleChange}>Click Here</button>
        <Todo sendingData={this.state.myString}/> */}
        {/* <Counter /> */}
        {/* <Forms /> */}
        <List />
      </div>
    )   // # JSX Type
  }
}
export default App
