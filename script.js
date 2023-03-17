const textDiv = document.querySelector(".grid-item-text");

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

var tempstr="";

var ad = false;
var sub = false;
var mul = false;
var div = false;
var eq = false;

//function for clearing
function Clear(){
    tempstr="";
    textDiv.textContent = "";
}
//function for all clear

//create function to handle numbers
function NumberPress(num){
    if (eq===true) {
        n1=null;
        Clear()
        ClearOperators();
    }
    n2=null;
    tempstr = tempstr+=num;
    textDiv.textContent = tempstr;
}

//create function to operate
function Operate(num1){
    console.log(n1,n2,tempstr,);
    
    
    if (eq===true) {
        n1=tempstr;
        Clear()
        num1=n1;
    }
    if (n2===null) {
        n2 = parseInt(tempstr);
    }
    if (ad) {
        eq=true;
        Add(num1,n2);   
    }
    if (sub) {
        eq=true;
        Subtract(num1,n2);   
    }
    if (mul) {
        eq=true;
        Multiply(num1,n2);   
    }
    if (div) {
        eq=true;
        Divide(num1,n2);   
    }
    
}

function ClearOperators(){
    ad =false;
    sub=false;
    mul=false;
    div=false;
    eq=false;
}

// functions to handle operator buttons
btnAdd.addEventListener('click',()=>{
    if(eq===true)
        ClearOperators();
    if(ad===true)
        Add(n1,parseInt(tempstr))
    else 
        SetOperation(true,false,false,false)
});
btnSub.addEventListener('click',()=>{
    if(eq===true)
        ClearOperators();
    if(sub===true)
        Subtract(n1,parseInt(tempstr))
    else  
        SetOperation(false,true,false,false)
});
btnMul.addEventListener('click',()=>{
    if(eq===true)
        ClearOperators();
    if(mul===true)
        Multiply(n1,parseInt(tempstr))
    else
        SetOperation(false,false,true,false)
});
btnDiv.addEventListener('click',()=>{
    if(eq===true)
        ClearOperators();
    if(mul===true)
        Divide(n1,parseInt(tempstr))
    else SetOperation(false, false,false,true)
});

//event listeners call this function to 
function SetOperation(bAdd, bSub, bMul, bDiv){
    
    if(tempstr!=""){
        if(ad===true)Add(n1,parseFloat(tempstr));
        if(sub===true)Subtract(n1,parseFloat(tempstr));
        if(mul===true)Multiply(n1,parseFloat(tempstr));
        if(div===true)Divide(n1,parseFloat(tempstr));
    }
    ad=bAdd;
    sub=bSub;
    mul=bMul;
    div=bDiv;
    if (tempstr==="") {
        return;
    }
    // for the numbers
    n1 = parseInt(tempstr);
    // to reset tempstr
    tempstr="";
    textDiv.textContent = n1;
    console.log("Operation",n1,n2,tempstr);
    
}

//create function to handle operators
function Add(a,b){
    var ans;
    console.log(a, b, isNaN(b),eq, tempstr);
    if (isNaN(b)||b===null) {
        return;
    }
    else if (eq!=true) {
        ans=a+b;
        textDiv.textContent = ans;
        n1=ans;
        tempstr="";
        console.log(`add1 ${a}+${b}=${ans}`);
    }
    else{
        ans = a+b;
        console.log(`add ${a}+${b}=${ans}`);
        textDiv.textContent = ans;
        tempstr=ans;
    }

    console.log(ad, eq);
    
}
function Subtract(a,b){
    var ans;
    console.log(a, b, isNaN(b),eq );
    if (isNaN(b)||b===null) {
        return;
    }
    else if (eq!=true) {
        ans=a-b;
        textDiv.textContent = ans;
        n1=ans;
        tempstr="";
        console.log(`sub1 ${a}+${b}=${ans}`);
    }
    else{
        ans = a-b;
        console.log(`sub ${a}+${b}=${ans}`);
        textDiv.textContent = ans;
        tempstr=ans;
    }

    console.log(sub, eq);
    
}
function Multiply(a,b){
    var ans;
    console.log(a, b, isNaN(b),eq );
    if (isNaN(b)||b===null) {
        return;
    }
    else if (eq!=true) {
        ans=a*b;
        textDiv.textContent = ans;
        n1=ans;
        tempstr="";
        console.log(`mul1 ${a}+${b}=${ans}`);
    }
    else{
        ans = a*b;
        console.log(`mul ${a}+${b}=${ans}`);
        textDiv.textContent = ans;
        tempstr=ans;
    }

    console.log(sub, eq);
}
function Divide(a,b){
    var ans;
    console.log(a, b, isNaN(b),eq );
    if (isNaN(b)||b===null) {
        return;
    }
    else if (eq!=true) {
        ans=a/b;
        textDiv.textContent = ans;
        n1=ans;
        tempstr="";
        console.log(`div1 ${a}+${b}=${ans}`);
    }
    else{
        ans = a/b;
        console.log(`div ${a}+${b}=${ans}`);
        textDiv.textContent = ans;
        tempstr=ans;
    }

    console.log(sub, eq);
}

