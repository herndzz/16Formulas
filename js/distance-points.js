//Another function starts here
function distance() {
    //VARIABLES
    let inputX1 = document.querySelector("input#valueX1");
    let inputY1 = document.querySelector("input#valueY1");
    let inputX2 = document.querySelector("input#valueX2");
    let inputY2 = document.querySelector("input#valueY2");
    let res = document.querySelector("p#res")

    let x1 = Number(inputX1.value);
    let y1 = Number(inputY1.value);
    let x2 = Number(inputX2.value);
    let y2 = Number(inputY2.value); 

    //PROCESSING
    let resultWithSquare = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
    let resultBrute = (Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2));
    
    //OUTPUT
    res.innerHTML = "Result with square: " + resultWithSquare + ".<br></br> Result with not square: " + resultBrute;
};