# package.json :- This file contains the dependencies and the scripts required for the project
# dependencies :- external libraries, packages, or modules that the project relies on to work correctly.
# npm :- node package manager for the JavaScript runtime environment Node.js.
# package-lock.json :- file is to keep track of the exact versions of all the dependencies installed in our project, 
# node_modules :-  a folder that all dependencies are installed

# =======================================================================================================================
# ========================================== Components =================================================================
# =======================================================================================================================

# component describes a part ui
# They are reusable and can be nested inside another components
# Two Types :-
          #   satateless Functional components
          #   stateful class components
"Functional Components ==============================>"
# export const Greet = () => <h1>Hello ALiens</h1>
# import { Greet } from './components/greet';
# function App() {
#   return (
#     <div className="App">
#       <Greet></Greet>
#     </div>
#   );
# }
"Class Component ======================================>"
# import React,{ Component } from "react";

# class Welcome extends Component {
#      render() {
#           return <h1>Class Component</h1>
#      }
# }

# export default Welcome

# class App extends Component{
#   render() {
#     return (
#       <div className='App'>
#         <Hello />
#         <Welcome />
#       </div>
#     )   // # JSX Type
#     return React.createElement(
#       'div', null, 
#       React.createElement('h1', {id:'hello',className:'dummyClass'},'thousi'))
    
#   }
# }
# export default App

"+--------------------------------------+--------------------------------------------+"
"|  Functional                          |  Class                                     |"
"+--------------------------------------+--------------------------------------------+"
"|  Simple Functions                    |  More feature rich                         |"
"|  Absence Of 'this' keyword           |  Maintain their own private data - state   |"
"|  Solution Without using state        |  Complex UI Logic                          |"
"|  Stateless/Dumb/Presentational       |  Provide Lifecycle hooks                   |"
"|                                      |  Stateful/Smart/Conatiner                  |"
"+--------------------------------------+--------------------------------------------+"

# ========================================================================================================================
# ============================  JSX ======================================================================================
# ========================================================================================================================
# Javascript XML (JSX) :- Extension to the javascript language syntax
# write XML - like code for elements and components XML - Extensible Markup Language ,exchangind data btw systems,platforms,programming language etc..
# have tag name ,attributes 
"JSX Differences =============>"
# class -> class Name
# for -> htmlFor

