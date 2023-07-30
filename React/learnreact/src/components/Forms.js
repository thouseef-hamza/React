import React, { Component } from 'react'

// export default class Forms extends Component {
//      state = {
//           firstName : '',
//           lastName : ''
//      }

//      OnHandleChange = (event) => {
//           this.setState({
//                [event.target.name] : event.target.value
//           });
//      };                                                   // controlled components
//      onSubmit = (event) => {
//           event.preventDefault() // this will not refresh the page whrn submitting the form
//           console.log(this.state);
//      };
//   render() {
//     return (
//       <form>
//           <h1>Form Component</h1>
//           <input type='text' name='firstName' value={this.state.inputvalue} onChange={this.OnHandleChange}></input>
//           <input type='text' name='lastName' value={this.state.inputvalue} onChange={this.OnHandleChange}></input>
//           <button  onClick={this.onSubmit}>Submit</button>
//       </form>
//     )
//   }
// }
 

// Uncontrolled Components =================================================>
export default class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstName : '',
          lastName : ''
        }
        this.inputOne = React.createRef();
        this.inputTwo = React.createRef();
    }

                                                      
     onSubmit = (event) => {
          console.log(this.inputOne.value);
          console.log(this.inputTwo.value);
     }
  render() {
    return (
      <form>
          <h1>Form Component</h1>
          <input type='text' name='firstName' ref={input=>this.inputOne = input}></input>
          <input type='text' name='lastName' ref={input=>this.inputTwo = input}></input>
          <button type="button"  onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}
 