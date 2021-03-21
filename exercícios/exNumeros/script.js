let res = document.querySelector("#resultado")
let lista = document.getElementById("lista")
let opt = document.querySelector("#lista")
let numero = document.getElementById("num")
let numeros = []

function isInRange() {
    let num = Number(numero.value)
    if (num > 0 && num <= 100)
    return true
}

function adicionar() {
    if (isInRange(true)) {
        let num = Number(numero.value)
        opt.innerHTML += `<option value="${num}">${num}</option>`
        numeros.push(`${num}`)
    }
    else {
        window.alert("Digite um numero de 1 a 100!")
    }
    
}

function finalizar() {
    for (let i = 0; i< numeros.length; i++) {
        res.innerHTML += `${numeros[i]}<p>`
    }
}