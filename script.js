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

const btnEq =document.querySelector(".grid-item-eq");
btnEq.addEventListener('click',()=> Operate(n1));

// NUMBER DECLARATIONS
var n1=0;
var n2=0;

var n1str="";
var n2str="";

var tempstr="";

var ad = false;
var sub = false;
var mul = false;
var div = false;

//function for clearing
function Clear(){
    tempstr="";
    textDiv.textContent = "0";
}
//function for all clear

//create function to handle numbers
function NumberPress(num){
    n2=null;
    tempstr = tempstr+=num;
    textDiv.textContent = tempstr;
}

//create function to operate
function Operate(num1){
    console.log(n1,n2,tempstr)
    
    if (n2===null) {
        n2 = parseInt(tempstr);
    }
    
    
    if (ad) {
        Add(num1,n2);
    }

}

// functions to handle operator buttons
btnAdd.addEventListener('click',()=>SetOperation(true,false,false,false));
btnSub.addEventListener('click',()=>SetOperation(false,true,false,false));
btnMul.addEventListener('click',()=>SetOperation(false,false,true,false));
btnDiv.addEventListener('click',()=>SetOperation(false, false,false,true));

//event listeners call this function to 
function SetOperation(bAdd, bSub, bMul, bDiv){
    console.log("Operation",n1,n2,tempstr);
    ad=bAdd;
    sub=bSub;
    mul=bMul;
    div=bDiv;
    // for the numbers
    n1 = parseInt(tempstr);
    // to reset tempstr
    tempstr="";
    textDiv.textContent = "0";
    
}

//create function to handle operators
function Add(a,b){
    var ans;
    ans = a+b;
    n1=ans;
    console.log(`${a}+${b}=${ans}`);
    textDiv.textContent = ans;
    tempstr="";
}
function Subtract(a,b){
    return a-b;
}
function Multiply(a,b){
    return a*b;
}
function Divide(a,b){
    return a/b;
}

