# ==================================================================================================================
# ====================================== What is React =============================================================
# ==================================================================================================================
"React is a library,used for designing web applocations"
"Created by Facebook"
"Use JSX"
"state = variables"
"setState = Change the state"
"props = pass state to child components"
"Routing - redirect to another page without refreshing"
"Hooks - "
#! In class Use State
#! In Function Use Hooks

# ===================== More About ==========================================
"package.json :- This file contains the dependencies and the scripts required for the project"
"dependencies :- external libraries, packages, or modules that the project relies on to work correctly."
"npm :- node package manager for the JavaScript runtime environment Node.js."
"package-lock.json :- file is to keep track of the exact versions of all the dependencies installed in our project," 
"node_modules :-  a folder that all dependencies are installed"

"npx create-react-app app_name -> fetching from online and get the  latest react dependencies"
"npm install -g create-react-app -> for offline ===> create-react-app app_name"

# =======================================================================================================================
# ========================================== Components =================================================================
# =======================================================================================================================

"component describes a part ui"
"They are reusable and can be nested inside another components"
"Two Types :-"
            "satateless Functional components"
            "stateful class components"
            
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
"One Parent div Only Allowed eg:here <div className='App'>"
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
"Javascript XML (JSX) :- Extension to the javascript language syntax"
"write XML - like code for elements and components XML - Extensible Markup Language ,exchangind data btw systems,platforms,programming language etc.."
"have tag name ,attributes "

# JSX Differences =============>
"class -> class Name"
"for -> htmlFor"

# ================================================================================
"==================== State (Class Based) ========================================"
# ================================================================================
"From Here -->"
# const myString = "Hello"

"To Here --->"
# state = {
     # myString : "Hello" ,
# }

"For Rendering"
# class App extends Component{
#    state = {
          # myString : "Hello" ,
#    }
#   render() {
#     return (
#       <div className='App'>
#         {this.state.myString}
#       </div>
#     )   // # JSX Type
#   }
# }
# export default App

"this -> accessing same class Property"

# ==========================================================================================
# ====================== Props =============================================================
# ==========================================================================================
# import Todo from './components/Todo';
# class App extends Component{
#    state = {
          # myString : "Hello" ,
#    }
#   render() {
#     return (
#       <div className='App'>
#         {this.state.myString}
        # <Todo sendingData={this.state.myString}/>
#       </div>
#     )   
#   }
# }
# 
# export default App

# ================================================================================================
# ================== Events ======================================================================
# ================================================================================================
"event.preventDefault(); ====> When Submitting Form it will not not referesh the page" 
"react name attribute for handling for all the input values"