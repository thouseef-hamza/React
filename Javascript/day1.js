// Just Refreshing JS ========================>
"======================================================================"
// ======================= Ternary Operator =======================
let a = 33
let ans = (a%2==0) ? "Even Number" : "Odd Number"
console.log(ans);

// ================================ Object Destructuring ===============================
const obj1 = {
     name : "Thousi",
     place : "kasargod",
     age : 10
}
function myFunction(){
     // const name = obj1.name
     // const place = obj1.place
     // const age = obj1.age
     const {
          name,
          place,
          age,
          status = false // default value setting
     } = obj1   // object destructuring

     console.log(name,place,age,status); // Thousi kasargod 10 false
}
myFunction();
"------------------- Destructuring In Function Parameter---------------------------"
function aFunction({name,place}){
     console.log(name,place);
}
aFunction(obj1) // Thousi kasargod
"---------------------- 1:- Two Object Destructuring -----------------------------------------"
var object1 = {
     name : 'sappu',
     place : "ksd"
}
var object2 = {
     name : "shezu",
     place : "kasargod"

}
function abc(){
     var {
          name,
          place
     } = object1;

     var {
          name : name2,
          place : place2
     } = object2

     console.log(name,place,name2,place2)


}
abc()

// ================= Array Destructuring ========================================

const arr = [1,2,3,4,5]
const [b,c,d,e,f] = arr
console.log(b,c,d,e,f); // 1,2,3,4,5

const arr1 = [1,2,3,4,5]
const [b1, ,d1, ,f1,defaulti = 2544] = arr1; // default value setting
console.log(b1,d1,f1,defaulti); // 1,3,5, 2544
"======================= Destructuring In functions Parameter =================="
const marks = [100,101,203,45]
function Function([x,y,z]){
     console.log(x,y,z);  // 100,101,203
}
Function(marks);
"---------------- Destructuring andn Returning --------------"
testing = [1,2,3,4]
function test(){
     var [a,b,c] = getValue();
     console.log(a,b,c); // 1 2 3
}
function getValue(){
     return testing;
}
test(testing)

