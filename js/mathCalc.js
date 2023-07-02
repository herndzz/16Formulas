//Objeto "calculate" contém todas as funçoẽs necessárias para efetuação dos cálculos 
//Obs.: Fórmulas do Triângulo Retângulo(Cos, Sen e Tan) agem de forma indívidual
const calculate = {
    bhaskara: function(a, b, c) {
        let delta = (b**2) - (4*a*c);
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        return {delta, x1, x2};
    },
    dstcBtwPts: function(x1, y1, x2, y2) {
        let resWithRoot = ((x1 - x2) ** 2) + ((y1 - y2) ** 2);
        let res = Math.sqrt((x1 - x2) ** 2) + ((y1 - y2) ** 2);
        return {resWithRoot, res};
    },
    //Tudo abaixo dessa linha é relacionado ao triângulo retângulo
    sen: function(co, hip, degrees) {
        let rad = degrees * (Math.PI / 180);
        if(co == 0 ) {
            return hip * Math.sin(rad);
        } 
        else if(hip == 0) {
            return co * Math.sin(rad);
        } 
        else {
            console.log('Error in Sen');
        }
    },
    cos: function(ca, hip, degrees) {
        let rad = degrees * (Math.PI / 180);
        if(ca == 0 ) {
            return hip * Math.cos(rad);
        } 
        else if(hip == 0) {
            return ca * Math.cos(rad);
        } 
        else {
            console.log('Error in Cos');
        }
    },
    tan: function(co, ca, degrees) {
        let rad = degrees * (Math.PI / 180);
        if(co == 0) {
            return ca * Math.tan(rad);
        } 
        else if(ca == 0) {
            return co * Math.tan(rad);
        } 
        else {
            console.log('Error in Tan');
        }
    }
    //Tudo acima dessa linha é relacionado ao triângulo retângulo
}

//Esse objeto somente instância novos objetos relacionados aos cálculos
const createObj = {
    bhaskara: class {
        constructor(a, b, c) {
            this.a = a; //a = x^2 (coeficiente quadrático)
            this.b = b; //b = 2x (coeficiente linear)
            this.c = c; //c = number (constante)
    
            this.delta = Math.pow(this.b, 2) - (4 * this.a * this.c);
            this.x1 = (-this.b + Math.sqrt(this.delta)) / (2 * this.a);
            this.x2 = (-this.b - Math.sqrt(this.delta)) / (2 * this.a);
        }
    
        calcularDelta() {
            Math.pow(this.b, 2) - (4 * this.a * this.c);
        }
    
        calcularX1() {
            return (this.b + Math.sqrt(this.delta)) / (2 * this.a);
        }
    },
    dstcBtwPts: class {
        //Para calcular o comprimento de reta, utiliz-se a fórmula deduzida do teorema de Pitágoras. Dados os pontos A(xA, yA) e B(xB, Yb)
        constructor(x1, y1, x2, y2) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
    
            this.resWithRoot = ((this.x1 - this.x2) ** 2) + ((this.y1 - this.y2) ** 2);
            this.res = Math.sqrt((this.x1 - this.x2) ** 2) + ((this.y1 - this.y2) ** 2);
        }
    },
    triangleRetangle: class {
        constructor(hip, ca, co, degrees) {
            this.hip = hip;
            this.ca = ca;
            this.co = co;
            this.degrees = degrees;
    
            this.rad = this.degrees * (Math.PI / 180); //Transformando em radianos
        }
        //this.sen = Math.sin(degrees) * (co / hip);
        //this.cos = Math.cos(degrees) * (ca / hip);
        //this.tan = Math.tan(degrees) * (co / ca);
    
        sen() {
            if(this.co == 0 ) {
                return this.hip * Math.sin(this.rad);
            } 
            else if(this.hip == 0) {
                return this.co * Math.sin(this.rad);
            } 
            else {
                console.log('Error in Sen');
            }
        }
    
        cos() {
            if(this.ca == 0 ) {
                return this.hip * Math.cos(this.rad);
            } 
            else if(this.hip == 0) {
                return this.ca * Math.cos(this.rad);
            } 
            else {
                console.log('Error in Cos');
            }
        }
    
        tan() {
            if(this.co == 0) {
                return this.ca * Math.tan(this.rad);
            } 
            else if(this.ca == 0) {
                return this.co * Math.tan(this.rad);
            } 
            else {
                console.log('Error in Tan');
            }
        }
    }
};

export {calculate, createObj};