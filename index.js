let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnPlus = document.getElementById("btnPlus");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");
let btnEq = document.getElementById("btnEq");
let btnC = document.getElementById("btnC");
let rs = document.getElementById("rs");

btn1.addEventListener("click",() =>{
    res = rs.textContent;
    res += '1';
    rs.textContent = res;
});
btn2.addEventListener("click",() =>{
    res = rs.textContent;
    res += '2';
    rs.textContent = res;
});
btn3.addEventListener("click",() =>{
    res = rs.textContent;
    res += '3';
    rs.textContent = res;
});
btn4.addEventListener("click",() =>{
    res = rs.textContent;
    res += '4';
    rs.textContent = res;
});
btn5.addEventListener("click",() =>{
    res = rs.textContent;
    res += '5';
    rs.textContent = res;
});
btn6.addEventListener("click",() =>{
    res = rs.textContent;
    res += '6';
    rs.textContent = res;
});
btn7.addEventListener("click",() =>{
    res = rs.textContent;
    res += '7';
    rs.textContent = res;
});
btn8.addEventListener("click",() =>{
    res = rs.textContent;
    res += '8';
    rs.textContent = res;
});
btn9.addEventListener("click",() =>{
    res = rs.textContent;
    res += '9';
    rs.textContent = res;
});
btn0.addEventListener("click",() =>{
    res = rs.textContent;
    res += '0';
    rs.textContent = res;
});
btnPlus.addEventListener("click",() =>{
    res = rs.textContent;
    res += '+';
    rs.textContent = res;
});
btnSub.addEventListener("click",() =>{
    res = rs.textContent;
    res += '-';
    rs.textContent = res;
});
btnDiv.addEventListener("click",() =>{
    res = rs.textContent;
    res += '/';
    rs.textContent = res;
});
btnMul.addEventListener("click",() =>{
    res = rs.textContent;
    res += '*';
    rs.textContent = res;
});
btnEq.addEventListener("click",() =>{
    try{
        res = eval(res);
        rs.textContent = res;
    }
    catch(err){
        rs.textContent = err;
    }
});
btnC.addEventListener("click",() =>{
    res = '';
    rs.textContent = res;
});