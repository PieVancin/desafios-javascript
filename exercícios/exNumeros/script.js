


function adicionar() {
    let res = document.querySelector("#num")
    let lista = document.getElementById("lista")
    let opt = document.querySelector("#lista")
    let numero = document.getElementById("num")
    let numeros = []

    let num = Number(numero.value)
    opt.innerHTML += `<option value="${num}">${num}</option>`
}