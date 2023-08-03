
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

// ================= Spread Operator ================================
const globalPlayer = {
     id:0,
     name:"Bot",
     powerlevel:50
}
"const player1 = globalPlayer;"
const player1 ={...globalPlayer}; // making the copy
"const player1 = Object.assign({},globalPlayer) // making the copy of another method using object"
player1.powerlevel = 1000000
"console.log(player1); // 1000000 "
"console.log(globalPlayer) // 1000000 immutable, changes effects parent"
console.log(player1); // 1000000
console.log(globalPlayer) // 50  // because of spread operator it wont be affect

// ! using spread operator which property we are spreading that property will make a copy

const spread1 = ["thousi","safiya","safwan"]
const spread2 = ["shezin","elnino","lanina"]
const nestedarray = [1,2,3,4,5]
const spreaded = [...spread1,...spread2,"pushing",nestedarray]
console.log(spreaded);

// ======================= Rest Operator  =======================
const rest = {
     id :0,
     name : "still",
     rank : 1
}

//  ! using rest paramter we can make like spread if we have necessary key needed ,we can make others as rest in object type

const {id,...othersin} = rest
console.log(id,othersin); // 0  {name: 'still', rank: 1}



// =================== Arrow Function =================================

const myFunc= value => value + 5 // if we have one value we can use this

console.log(myFunc(8));

// ========================  For Each =====================

const listobj1 = [
     {
          name : "Thousi",
          place : "kasargod",
          age : 10
     },
     {
          name : "safiya",
          place : "kasargod",
          age : 19
     },
     {
          name : "shezin",
          place : "kasargod",
          age : 13
     },
];
// for(let i=0;i<listobj1.length;i++){
//      console.log(listobj1[i].name)
// }

// ! using for each we dont need to loop over the object     
listobj1.forEach((value,index,array)=>{
     console.log(value); //{name: 'Thousi', place: 'kasargod', age: 10} \n {name: 'safiya', place: 'kasargod', age: 19} \n {name: 'shezin', place: 'kasargod', age: 13}
     console.log(index); // 0, 1, 2
     console.log(array); // (3) [{…}, {…}, {…}] total 3 copies for each obj

});

// =====================  Map =================================
// const newArray = []
// for(let i = 0 ;i<listobj1.length;i++){
//      newArray.push(listobj1[i].place)
// }
// ! Using map we can iterate through the listobject and  return specific key value as a new array

const newArray= listobj1.map((value)=> value.age);
console.log(newArray); // [10, 19, 13]

// ================= Filter ===================================

// ! Using filter we can take specific value based on a consition
const newFilter= listobj1.filter((value)=> value.age === 10);
console.log(newFilter); // [10, 19, 13]


// =================== Reduce =================================

// ! To Perform Calculation to make single value 4 arguments take

const numberArray = [1,2,3,4,5,5,6,8,9]
// for (let i=0;i<numberArray.length;i++){
//      total += numberArray[i];
// } 
// console.log(total);

 // 4 arguments total,value,index,array
const newReduce = numberArray.reduce((total,value)=> total+value,0); // 0 is declaring total = 0
console.log(newReduce); // [10, 19, 13]
