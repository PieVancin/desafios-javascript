let res = document.querySelector("#resultado")
let lista = document.getElementById("lista")
let opt = document.querySelector("#lista")
let numero = document.getElementById("num")
let numeros = []

function adicionar() {
    let num = Number(numero.value)
    opt.innerHTML += `<option value="${num}">${num}</option>`
    numeros.push(`${num}`)
}

function finalizar() {
    for (let i = 0; i< numeros.length; i++) {
        res.innerHTML += `${numeros[i]}<p>`
    }
}