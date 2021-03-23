let res = document.querySelector("#resultado")
let lista = document.getElementById("lista")
let opt = document.querySelector("#lista")
let numero = document.getElementById("num")
let numeros = []
let sum = 0

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
    total()
    maior()
    menor()
    soma()
    media()
}

function total() {
    res.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
}

function maior() {
    let maior = numeros.sort()
    res.innerHTML += `<p>O maior número informado foi ${numeros.slice(-1).pop()}.</p>`
}

function menor() {
    let men = numeros.sort()
    res.innerHTML += `<p>O menor número informado foi ${numeros[0]}.</p>`
}

function soma() {
    for (let i in numeros) {
        sum += Number(numeros[i])
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
    return sum
}

function media() {
    let media = sum / numeros.length
    res.innerHTML += `A média dos valores digitados é ${media}.`
}

