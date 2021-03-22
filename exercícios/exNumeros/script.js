let res = document.querySelector("#resultado")
let lista = document.getElementById("lista")
let opt = document.querySelector("#lista")
let numero = document.getElementById("num")
let numeros = []

function isDuplicate() {
    let num = Number(numero.value)
    if (numeros.includes(num)) {
        return true
    }
}

function isNumber() {
    if (numero.value == "") {
        window.alert("Valor inválido!")
        return false
    } else {
        return true
    }
}

function isInRange() {
    let num = Number(numero.value)
    if (num > 0 && num <= 100) {
        return true
    } else {
        window.alert("Digite um numero de 1 a 100!")
        return false
    }
}

function adicionar() {
    let num = Number(numero.value)
    if (isNumber() == true && isInRange() == true) {      
        opt.innerHTML += `<option value="${num}">Valor ${num} adicionado.</option>`
        numeros.push(`${num}`)
    } 
}



function finalizar() {
    for (let i = 0; i< numeros.length; i++) {
        res.innerHTML += `${numeros[i]}<p>`
    }
}