//BHASKARA FUNCTION LOGIC
function bhaskara() { 
    //VARIABLES
    let a2 = document.querySelector("input#valueA");
    let nb = document.querySelector("input#valueB");
    let cc = document.querySelector("input#valueC");

    let a = Number(a2.value);
    let b = Number(nb.value);
    let c = Number(cc.value);
    console.log(a, b, c);

    //PROCESSING
    let delta = Math.pow(b, 2) - (4 * a *c);
    let x = (b + Math.sqrt(delta)) / (2 * a);
    let xx = (b - Math.sqrt(delta)) / (2 * a);
    console.log(delta, x, xx);

    //OUTPUT
    res.innerHTML = `Delta(▲): ${delta} <br></br> X1: ${-x} <br></br> X2: ${-xx}`;
}