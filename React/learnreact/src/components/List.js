import React, { Component,PureComponent } from 'react'

export default class List extends PureComponent {
     state = {
          score: 5,
          data :[
               {
                    id: 1,
                    name: "John",
                    age: 45
               },
               {
                    id: 2,
                    name: "Rahul",
                    age: 19
               },
          ]
     };    
     incrementScore=()=>{
          this.setState({
               score: 10
          })
     }
     // componentDidMount(){   // Like JS onload Event, When Webpage Reload This Method will be triggered First, Fetching Data Fastly
     //      console.log("First Triggering Method")
     // }                   
     // componentWillUnmount(){
     //      console.log("Exit");  // Trigger When We Leave The Current Page
     // }

    render() {
     console.log(this.state.score)
    return (
      <div>
          <ul>
               {this.state.data.map((value,index)=>(
                    <li key={value.id}>
                         {value.id} {value.name} {value.age}
                    </li>
               ))}
          </ul>
          <button onClick={this.incrementScore}>Score Click</button>
     </div>
    )
  }
}
