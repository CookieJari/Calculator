var n1=0;
var n2=0;

var n1str="";
var n2str="";

var tempstr="";
const textDiv = document.querySelector(".grid-item-text");

const btn1 = document.querySelector(".grid-item-1");
const btn2 = document.querySelector(".grid-item-2");
const btn3 = document.querySelector(".grid-item-3");
const btn4 = document.querySelector(".grid-item-4");
const btn5 = document.querySelector(".grid-item-5");
const btn6 = document.querySelector(".grid-item-6");
const btn7 = document.querySelector(".grid-item-7");
const btn8 = document.querySelector(".grid-item-8");
const btn9 = document.querySelector(".grid-item-9");
const btn0 = document.querySelector(".grid-item0");

const btnDiv = document.querySelector(".grid-item-div");
const btnMul = document.querySelector(".grid-item-mul");
const btnSub = document.querySelector(".grid-item-sub");
const btnAdd = document.querySelector(".grid-item-add");

const btnClr =document.querySelector(".grid-item-clr");
btnClr.addEventListener('click',()=> Clear());
const btnAc =document.querySelector(".grid-item-ac");


//function for clearing
function Clear(){
    tempstr="";
    textDiv.textContent = "0";
}

//create function to handle numbers
function NumberPress(num){
    console.log(num);
    tempstr = tempstr+=num;
    textDiv.textContent = tempstr;
}
//create function to handle operators

//create function to operate
