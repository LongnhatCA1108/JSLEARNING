// window.alert("hello các bạn");
/*
//đây là ví dụ phần 1
var a=100;
console.log(a);
*/
//*******************************************************************************************************************************************************
// đây là ví dụ cho phần toán tử
/*
var a= true;
var b=12;
var c="12";
var d=undefined;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
var e=Number(c);
console.log(typeof(e));
if (b==c) console.log("== không phân biệt kiểu dữ liệu");
if (b===c) console.log("==="); else console.log("=== phân biệt kiểu dữ liệu khi so ssanhs")
*/
//-------------------------------------------------------------------------------------
// Đây là ví dụ cho phần Object
// var user = { 
//     username: 'Nhat long',
//     genger: "male",
//     age: 21,
//     viewInfor: function(){
//         console.log(this.username +" " + this.genger +" "+ this.age);
//     },
//     location: {
//         lat: 0.002,
//         lon: 0.49
//     }
// }
// function viewInfor(u){ // Function Declarations , có thể gọi hàm trước khị khai báo 
//     console.log(u.username +" " + u.genger +" "+ u.age);
// }
// user.viewInfor();
// viewInfor({username: "long",genger: "male", age:19});

// var viewInfor1= function (u){ // Function Expression, không thể gọi hàm trước khi khai báo
//     console.log(u.username +" " + u.genger +" "+ u.age);
// }
// console.log(viewInfor1);// function có thể được sử dungjlamf tham số cho function khác
// viewInfor1({username: "long",genger: "male", age:19});
// console.log(typeof(viewInfor1));
// viewInfor1.version = {
//     Vname: "funver",
//     number: 2.0,
//     author: "long"
// } // có thể thêm trực tiếp obj vào function vì nó là 1 object
//-------------------------------------------------------------------------------------------------
// Đây là ví dụ cho Call stack & call site
// function sayHello(){
//     console.log(this);
// }
// sayHello();
// function welcome(){
//     console.log("hello"+this.Uname);
// }
// var user = {
//     Uname: "long",
//     welcome: welcome
// }
// welcome();
// user.welcome();
//-----------------------------------------------------------------------------------------------
// HÀM NÂNG CAO
// function sayhello(name){
//     console.log(arguments)
// }
// sayhello();
// function pay(total, tip =0 , tax =0 ){
//     // tip = tip || 0;
//     return total+tip+tax*0.2 ;
// }
// console.log(pay(100,0))
// (function (u){ // Function Expression, không thể gọi hàm trước khi khai báo
//     console.log(u.username +" " + u.genger +" "+ u.age);
// }({username: "long", genger: "male", age: 30}))

// function talkto(people){
//     return function send(message){
//         console.log('hi, '+ people + " " + message);
//     }
// }
// talkto("Thùy")(" I LOVE YOU");
// var a = talkto("Thùy");
// console.log(a)
// a("I LOVE YOU");
// function downloadAvatar(url,onSuccess){
//     console.log("dowloading");
//     //downloading

//     //updated
//     onSuccess();
// }

// var user = {
//     Fname: "long",
//     Lname: "Nhat",
//     Showname: function(){
//         console.log(this.Fname+" "+this.Lname)
//     }
// }
// function Fullname(gen,phoneNum){
//     console.log(this.Fname+" và "+this.Lname)
//     console.log(gen+" và "+phoneNum)
// }
// // var sayHello = Fullname.bind(user) // gắn user vào hàm Fullname thông qua this
// // sayHello("male",'0919515555')
// Fullname.call(user)
//------------------------------------------------------------------------------------------------------------
//OPP trong js
user = {
    Fname: "long",
    Lname: "Nhat",
    Showname: function(){
        console.log(this.Fname+" "+this.Lname)
    }
}
Thuy = {
    Fname: 'hoang',
    Lname: 'Thuy'
}
Thuy.__proto__=user;
console.log(Thuy)
user.Showname();
Thuy.Showname();