import './App.css';
import {useRef} from 'react'
import axios from 'axios'

function App() {
  const nameRef = useRef()
  const ageRef = useRef()
  const domainRef = useRef()
  const handleSubmit = (event) =>{
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;
    const enteredDomain = domainRef.current.value; 

    const data = {
      name: enteredName,
      age:  enteredAge,
      domain: enteredDomain
    }
    axios.post("https://tactile-zephyr-380415-default-rtdb.firebaseio.com/.json",{
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })
   
  }
  return (
    <form className="app" onSubmit={handleSubmit}>
      <input type="text" name="" placeholder="Enter Your Name" ref={nameRef}/>
      <input type="text" name="" placeholder="Enter Your Age" ref={ageRef} />
      <input type="text" name="" placeholder="Enter Your Domain" ref={domainRef}/>
      <button type="submit">Submit</button> 
    </form>
  );
}

export default App;
