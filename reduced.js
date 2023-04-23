// y = mx + n
function reducedFunction(pointAxy, pointBxy) {
    //VARIABLES - THE MATRIZ VARIABLES ARE PRINCIPAL!
    let matrizA = `${pointAxy[1]}=${pointAxy[0]}m+n`;
    let matrizB = `${pointBxy[1]}=${pointBxy[0]}m+n`;
    let arr = [];
    let arrB = [];
    let isConvert = false;
    console.log(matrizA);
    console.log(matrizB);

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
        console.log(matrizA);
        console.log("Albert");
        //If the signal are the same: reverse
    }
    if(!isConvert){
        typeElements(arr, matrizA);
        typeElements(arrB, matrizB);
        console.log(matrizB);
        console.log("passei aqui");
        //If different: repeat the equation
    }

    //RESPONSE
    let mValue = (arr[arr.indexOf("=") - 1] + arrB[arrB.indexOf("=") - 1]) / (arr[arr.indexOf("m") - 1] + arrB[arrB.indexOf("m") - 1]);
    let nValue = (arrB[arrB.indexOf("m") - 1] * mValue) -arrB[arrB.indexOf("=") - 1];
    let arrC = ["m=", (arr[arr.indexOf("=") - 1] + arrB[arrB.indexOf("=") - 1]) / (arr[arr.indexOf("m") - 1] + arrB[arrB.indexOf("m") - 1])];
    console.log(`${arr} \n ${arrB} \n ${arrC} \n ${mValue} \n ${nValue}`);
    return `y=${mValue}x+${nValue}`;
}

//Examples
let a = [[2, 3], [-2, -1]];
let b = [[0, 0],[1, 2]];
let c = [[4, 6], [2, 3]];

console.log(reducedFunction(a[0], a[1]));
console.log(reducedFunction(b[0], b[1]));
console.log(reducedFunction(c[0], c[1]));

//Wow I finally finished and I so feel happy and satisfy