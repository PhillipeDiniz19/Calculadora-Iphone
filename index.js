const resultado = document.querySelector(".resultado span");
const numeros = document.querySelectorAll(".numbers");
const signs = document.querySelectorAll(".sign");
const equals = document.querySelector('.equals');
const clear = document.querySelector(".limpar");
const negativo = document.querySelector('.negativo')
const porcentagem = document.querySelector('.persent')


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

    for(let i = 0; i < numeros.length; i++){
        numeros[i].addEventListener('click', (e) => {
            let atr = e.target.getAttribute('value');
            if(isFirstValue === false) {
                getFirstValue(atr)
            }
            if (isSecondValue == false) {
                getSecondValue(atr)
            }
        })
    }

    function getFirstValue(el) {
        resultado.textContent = "";
        firstValue += el;
        resultado.textContent = firstValue;
        firstValue = +firstValue
    }

    function getSecondValue (el) {
        if (firstValue != "" && sign != "") {
            secondValue += el;
            resultado.innerHTML = secondValue;
            secondValue = +secondValue;
        }
    }

    function getSign() {    
        for (let i = 0 ; i < signs.length; i++) {
            signs[i].addEventListener('click', (e) => {
                sign = e.target.getAttribute("value");
                isFirstValue = true
            })
        }
    }
    getSign();

    equals.addEventListener('click' , () => {
        resultado.innerHTML = ""
        if(sign === "+") {
            resultValue = firstValue + secondValue;
        } else if(sign === "-") {
            resultValue = firstValue - secondValue;
        } else if(sign === "x") {
            resultValue = firstValue * secondValue;
        } else if(sign === "/") {
            resultValue = firstValue / secondValue;
        }
        resultado.innerHTML = resultValue;
        firstValue = resultValue;
        secondValue = "";

        checkResultLenght (); 
    })

    function checkResultLenght () {
        resultValue = JSON.stringify(resultValue)
        if(resultValue.length >= 8) {
            resultValue= JSON.parse(resultValue);
            result.innerHTML = resultValue.toFixed(5)
        }
    }   

    negativo.addEventListener('click', () => {
        resultado.innerHTML = "";
        if(firstValue != "") {
            resultValue = -firstValue;
            firstValue = resultValue
        }
        if (firstValue != "" && secondValue != "" && sign != "") {
            resultValue = -resultValue
        }

        resultado.innerHTML = resultValue;
    })

   porcentagem.addEventListener('click', () => {
    resultado.innerHTML = "";
    if(firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100;
    }

    resultado.innerHTML = resultValue;
    }) 

    clear.addEventListener('click', () => {
        resultado.innerHTML = "0"
         firstValue = "";
         isFirstValue = false;
         secondValue = "";
         isSecondValue = false;
         sign = "";
         resultValue = 0;
    })

    
