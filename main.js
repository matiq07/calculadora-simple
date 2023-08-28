
function calcular(){
    let operando1 = Number(document.getElementById("op1").value);
    let operacion = document.getElementById("funciones").value;
    let operando2 = Number(document.getElementById("op2").value);
    let res = 0;
    if (operacion == "+"){
        res = operando1 + operando2;
    }else if (operacion == "-"){
        res = operando1 - operando2;
    }else if (operacion == "*"){
        res = operando1 * operando2;
    }else{
        res = operando1 / operando2;
    }
    document.getElementById("resultado").innerHTML = res;
}
