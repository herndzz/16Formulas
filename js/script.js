import { calculate, createObj } from "./mathCalc.js"; //Lembrar sempre de colocar a extensão do JavaScript
const clte = calculate;

let itsOn = "bhaskara";
const btnNav = document.querySelectorAll('.btn');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const radiosDiv = document.querySelector(".radiosIn");
const sen = document.getElementById('radio1');
const cos = document.getElementById('radio2');
const tan = document.getElementById('radio3');
const btn = document.querySelector('#btnResult');
const res = document.querySelector('#res');

btnNav[0].addEventListener('click', () => {
    itsOn = "bhaskara";

    toggleCalc(btnNav[0]);
    inputs[3].style.display = "none";
    labels[3].style.display = "none";

    labels[0].innerHTML = "A:";
    labels[1].innerHTML = "B:";
    labels[2].innerHTML = "C:";

    radiosDiv.classList.add("hide");
    res.innerHTML = "[Resultado]";
});

btnNav[1].addEventListener('click', () => {
    itsOn = "distance";

    toggleCalc(btnNav[1]);
    inputs[3].style.display = "flex";
    labels[3].style.display = "flex";

    labels[0].innerHTML = "X1:";
    labels[1].innerHTML = "Y1:";
    labels[2].innerHTML = "X2:";
    labels[3].innerHTML = "Y2:";

    radiosDiv.classList.add("hide");
    res.innerHTML = "[Resultado]";
});

btnNav[2].addEventListener('click', () => {
    itsOn = "triangleRet";

    toggleCalc(btnNav[2]);
    labels[3].style.display = "flex";
    inputs[3].style.display = "flex";

    labels[0].innerHTML = "HIP:";
    labels[1].innerHTML = "CA:";
    labels[2].innerHTML = "CO:";
    labels[3].innerHTML = "ANGULO:";

    radiosDiv.classList.remove("hide");
    res.innerHTML = "[Resultado]";
});

btn.addEventListener('click', () => {
    let i1 = Number(inputs[0].value);
    let i2 = Number(inputs[1].value);
    let i3 = Number(inputs[2].value);
    let i4 = Number(inputs[3].value);

    if(itsOn == "bhaskara") {
        res.innerHTML = bskrRes(i1, i2, i3);
    } 
    else if(itsOn == "distance") {
        res.innerHTML = distanceRes(i1, i2, i3, i4);
    } 
    else if(itsOn == "triangleRet") {
        res.innerHTML = triangleRetRes(i1, i2, i3, i4);
    }
});

function bskrRes(a, b, c) {
    let bskr = clte.bhaskara(a, b, c);
    
    return `<span class="bluePen">Delta: </span> ${bskr.delta} <br> 
    <span class="bluePen">x1: </span> ${bskr.x1} <br> 
    <span class="bluePen">x2: </span> ${bskr.x2}`;
};

function distanceRes(x1, y1, x2, y2) {
    let dis = clte.dstcBtwPts(x1, y1, x2, y2);
    
    return `<span class="bluePen">Resultado em raiz: </span> √${dis.resWithRoot} <br> 
    <span class="bluePen">Resultado: </span> ${dis.res}`;
};

function triangleRetRes(hip, ca, co, degrees) {
    let trgRet = new createObj.triangleRetangle(hip, ca, co, degrees);
    
    if(sen.checked){
        console.log("sen", trgRet.sen());
        return `<span class="bluePen">Resultado: </span> ${trgRet.sen()}`;
    } 
    else if(cos.checked){
        console.log("cos", trgRet.cos());
        return `<span class="bluePen">Resultado: </span> ${trgRet.cos()}`;
    } 
    else if(tan.checked){
        console.log("tan", trgRet.tan());
        return `<span class="bluePen">Resultado: </span> ${trgRet.tan()}`;
    } else {
        return "uai";
    }
}

function toggleCalc(btn) {
    btnNav.forEach(e => {
        e.classList.remove('default');
    });
    btn.classList.add('default');
};