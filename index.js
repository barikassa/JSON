//!----1----
// const MessegeObj = `{
// "name":"important",
// "messege":"the CEO have been here",
// "email":"jaoney@gmail"
// }`
// JSON.parse(MessegeObj);
// console.log(JSON.parse(MessegeObj));
//!----2----
// const arrayOfObj = `{

//     "cars":[
//         {
//         "model":"mazda",
//         "price":3000,
//         "year":2021
//     },
//     {
//         "model":"masrati",
//         "price":6000,
//         "year":2019
//     }
// ],
// "ship":[
// {"name":"the beuty",
// "year":"1921",
// "departure":"tailand",
// "img":"https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926_960_720.jpg"},
// {"name":"the queen",
// "year":"1747",
// "departure":"tailand",
// "img":"https://cdn.pixabay.com/photo/2015/03/05/01/46/sailing-ship-659758_960_720.jpg"}
// ]

// }`
// let arrObj=JSON.parse(arrayOfObj);
// console.log(arrObj);

//!----c---
// div=document.getElementById("div");
// arrObj.ship.forEach(element => {
//     console.log(element);
//     div.innerHTML += `${element.name}<br>${element.year}<br>${element.departure}<br><img src="${element.img}"><br>`

// });

//!--3---a---with class
// let arr = []
// let btn = document.getElementById("btn");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");

//         btn.onclick=function(e){
//             e.preventDefault()
//             for(let i=0;i<input.length;i++){
//             arr.push(input[i].value);
//         }
//     }
// console.log(arr);
//!--3---a/b---with id

// btn.onclick=function(){
//     let newForm={
//         name:input1.value,
//         emael:input2.value,
//         messege:input3.value
//     }
//     arr.push(newForm);
//     console.log(arr);

//     let strJsn=JSON.stringify(arr);
// console.log(strJsn);
// }
//!--4----

// function getObjReturnJsn() {
//     btn.onclick = function () {
//         let newForm = {
//             name: input1.value,
//             emael: input2.value,
//             messege: input3.value
//         }
//         arr.push(newForm);
//         console.log(arr);

//         let strJsn = JSON.stringify(arr);
//         console.log(strJsn);
//         return strJsn;
//     } 
   
// }
// getObjReturnJsn();

//!---5-----
// function getJsnReturnObj(){
//     const jsn=`{
//         "name":"dani",
//         "email":"dani@gmail.com",
//         "messege":"dont for got to send the messege"
//     }`
//  let obj=JSON.parse(jsn);
//  console.log(jsn);
//  return obj
// };
// getJsnReturnObj()

//! -----6---- 
// function multipleAge(){
//     btn.onclick=function(){
//         let formObject={
//             name:input1.value,
//             age:input2.value*3,
//             email:input3.value
//             }
//             console.log(formObject);
//             return formObject;
//     }
    
// }
// multipleAge();














