// Just Refreshing js concepts
// =========================================================
// ============================ Function Case Hoisting ======================
// =========================================================
"-----------------------------------------------------------"
//  1 ======================================================
getName(); // Hi Good Morning
// 2 ======================================================
console.log(getName)  //   ƒ getName(){ 
     //console.log("Hi Good Morning")
// }
function getName(){ 
     console.log("Hi Good Morning")
}
// ==================================================================
// ============================ Variable Case Hoisting ==============
// ==================================================================

"console.log(x) // undefined"
"var x = 7"
"console.log(x);  // 7"
"console.log(y) // not defined"

// =====================================================================
var x = 1;
a(); // 10
b(); // 100
console.log(x) // 1
 
function a(){
     var x = 10;
     console.log(x);
}

function b(){
     var x = 100;
     console.log(x);
}

// Asynchronous Callback ========================================================>
var button = document.getElementById("myButton")
button.onclick = () =>{
     console.log('started click event');

     $.ajax({
          url: 'https://jsonplaceholder.typicode.com/todos/1',
          success : (data) =>{
               console.log(data);
          },
          // async: false, // for making synchronous
     });
     console.log('ended click event');
}
// Promise Creating And Using ==================================================>
function myFetch(url){
     return new Promise((res,rej)=>{
          $.ajax({
               type: "GET",
               url:url,
               success: function(msg){
                    res(msg)
               },
               error : function(xhr,statusText){
                    rej(statusText)
               },
          });
     });
}

const pr = myFetch('https://jsonplaceholder.typicode/todos/1')
function buttonClick(){
     console.log('clicked');
     pr.then((data)=>{
          console.log(data);
     }, (err)=>{
          console.log(err);
     });
}
console.log('ended');
// Promise Chaining ==================================================>
myFetch('https://jsonplaceholder.typicode/todos/1')
     .then((data)=>{
          console.log(data);
          console.log('Requesting 2');
          return myFetch('https://jsonplaceholder.typicode/todos/2')
     })
     .then((data)=>{
          console.log(data);
          console.log('Requesting 2');
          return myFetch('https://jsonplaceholder.typicode/todos/3')
     })
     .then((data)=>{
          console.log(data);
     })

// JS Fetch Method =======================================================>
fetch('https://jsonplaceholder.typicode/todos/1')
   .then((data)=>{
     return data.json()
   })
   .then((data)=>{
     console.log(data);
   })
   .catch((err)=>{
     console.log('ERROR',err);
   });

// Promise  Utils =================================================>
const cache = {
     name : 'Code Malayalam'
}
function getJson(url){
     if (cache){
          return Promise.resolve(cache);
     }
     return fetch(url)
         .then((data)=>{
          return data.json();
         })
}
// Promise.all() ==============
Promise.all([
     getJson('https://jsonplaceholder.typicode/todos/1'),
     getJson('https://jsonplaceholder.typicode/todos/2'),
     getJson('https://jsonplaceholder.typicode/todos/3')

])
.then((data)=>{
     console.log(data); // (3) [{...},{...},{...}]
});

Promise.resolve()
Promise.reject()
Promise.all() // takes array of input
Promise.race() //which one is first resolving that will be the output in the given apis

// async await =================================================================>
// async => when the function declare
// await => when the function call


async function getValue(){
     try{
          const data = await fetch('https://jsonplaceholder.typicode/todos/3');
          const jsonData = await data.json();
          return jsonData;
     }catch(e){
          console.log('handled');
          return {};
     }

}