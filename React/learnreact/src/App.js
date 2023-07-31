import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import React, { Component,useState ,useEffect} from 'react';
import { Greet } from './components/greet';
import Welcome from './components/welcome';
import Todo from './components/Todo';
import Counter from './components/Counter';
import Forms from './components/Forms';
import List from './components/List';
import { useForm } from './components/useForm';
import { Theme } from './components/Theme';

const App = () => {
  const [value, handleChange] = useForm({
    name:"",
    email:""
  })
  useEffect(()=>{
    console.log("Running");
  },[])
  console.log(value.name);
  console.log(value.email);
  // const resetName = () => {
  //   setName("");
  // };
  return (
    // <div className="App">
    //   {/* <Greet></Greet>
    //   <h1>Welcome, {name}</h1>
    //   {/* <button onClick={resetName}>Reset</button> */}
    //   {/* <button onClick={()=>setName("")}>Reset</button> --------------- if it is single return */}
    // </div>
    <Theme />
    // <div>
    //   <Counter />
    //   <input type="text" name='name' value={value.name} onChange={handleChange} />
    //   <input type="email" name='email' value={value.email} onChange={handleChange} />
    // </div>
  );
}

export default App;
// class App extends Component {
//   state = {
//      myString : "Hello Thousi" ,
//   }
//   handleChange = () => {
//     this.setState({
//       myString : "Safiya"
//     })  // state changing
//   }
//   render() {
//     return (
//       <div className='App'>
//         {/* <Hello />
//         <Welcome />
//         <button onClick={this.handleChange}>Click Here</button>
//         <Todo sendingData={this.state.myString}/> */}
//         {/* <Counter /> */}
//         {/* <Forms /> */}
//         <List />
//       </div>
//     )   // # JSX Type
//   }
// }
// export default App
