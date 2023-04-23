function function1() {
    // y = mx + n
    function reducedFunction(pointAxy, pointBxy) {
    //VARIABLES - THE MATRIZ VARIABLES ARE PRINCIPAL!
    let matrizA = `${pointAxy[1]}=${pointAxy[0]}m+n`;
    let matrizB = `${pointBxy[1]}=${pointBxy[0]}m+n`;
    let arr = [];
    let arrB = [];
    let isConvert = false;

    const equationStructure = {//This object help to manipulate the equation structure
        a: {
            beforeEqual: matrizA.substring(0, matrizA.indexOf("=")),
            afterEqual: matrizA.substring(matrizA.indexOf("=") + 1, matrizA.length),
            sliced: matrizA.split("")
        },
        b: {
            beforeEqual: matrizB.substring(0, matrizB.indexOf("=")),
            afterEqual: matrizB.substring(matrizB.indexOf("=") + 1, matrizB.length),
            sliced: matrizB.split("")
        },
    }

    const equationSignal = {//This object verify the signal of the variables 
        mIsNegativeOnA: equationStructure.a.afterEqual[0] == "-",
        mIsNegativeOnB: equationStructure.b.afterEqual[0] == "-",
        nIsNegativeOnA: matrizA[matrizA.indexOf("n")-1] == "-",
        nIsNegativeOnB: matrizB[matrizB.indexOf("n")-1] == "-"
    }

    function typeElements(arr, matriz, ShouldReverseSignal = false){ //Function to transform into array and reverse signals
        for(i = 0; matriz.length > i; i++){
            //NUMBER VERIFICATION AND INVERSION OF SIGNALS
            if(Number(matriz[i])){
                if(!ShouldReverseSignal){ //IF DIFERENT SIGNAL = ONLY COPY
                    arr.push(Number(matriz[i]));
                }else if(ShouldReverseSignal){ //IF SAME SIGNAL = REVERSE
                    arr.push(-Number(matriz[i]));
                }
            }else if(!Number(matriz[i])){ //STRING VERIFICATION
                arr.push(matriz[i]);
            }
        }
    }

    //CONVERTION AND LOGIC
    if((equationSignal.mIsNegativeOnA && equationSignal.mIsNegativeOnB) || (!equationSignal.mIsNegativeOnA && !equationSignal.mIsNegativeOnB)){
        typeElements(arr, matrizA, true);
        typeElements(arrB, matrizB);
        isConvert = true;
        //If the signal are the same: reverse
    }
    if(!isConvert){
        typeElements(arr, matrizA);
        typeElements(arrB, matrizB);
        //If different: repeat the equation
    }

    //RESPONSE
    let mValue = (arr[arr.indexOf("=") - 1] + arrB[arrB.indexOf("=") - 1]) / (arr[arr.indexOf("m") - 1] + arrB[arrB.indexOf("m") - 1]);
    let nValue = (arrB[arrB.indexOf("m") - 1] * mValue) -arrB[arrB.indexOf("=") - 1];
    let arrC = ["m=", (arr[arr.indexOf("=") - 1] + arrB[arrB.indexOf("=") - 1]) / (arr[arr.indexOf("m") - 1] + arrB[arrB.indexOf("m") - 1])];
    console.log(`${arr} \n ${arrB} \n ${arrC} \n ${mValue} \n ${nValue}`);
    //return `y=${mValue}x+${nValue}`;
    
    //OUTPUT DOM
    res.innerHTML = `y=${mValue}x+${nValue}<br>m: ${mValue}<br>n: ${nValue}`;
}

//DOM VARIABLES
let inputX1 = document.querySelector("input#valueX1");
let inputY1 = document.querySelector("input#valueY1");
let inputX2 = document.querySelector("input#valueX2");
let inputY2 = document.querySelector("input#valueY2");
let res = document.querySelector("p#res")

let x1 = Number(inputX1.value);
let y1 = Number(inputY1.value);
let x2 = Number(inputX2.value);
let y2 = Number(inputY2.value); 

let arr1 = [x1, y1];
let arr2 = [x2, y2];

reducedFunction(arr1, arr2);
}

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