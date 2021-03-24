let res = document.querySelector("#resultado")
let lista = document.getElementById("lista")
let opt = document.querySelector("#lista")
let numero = document.getElementById("num")
let numeros = []
let sum = 0

// checa se o número digitado já existe na array
function isDuplicate(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {    
        return false
    }
}

// checa se o número está entre 1 e 100
function isInRange(n) {
    let num = Number(numero.value)
    if (num > 0 && num <= 100) {
        return true
    } else { 
        return false
    }
}

// imprime o número digitado na lista html e adiciona na array
function adicionar() {
    let num = Number(numero.value)
    if (isInRange(numero.value) && !isDuplicate(numero.value, numeros)) {      
        opt.innerHTML += `<option value="${num}">Valor ${num} adicionado.</option>`
        numeros.push(`${num}`)
        // limpa o resultado quando um novo valor é adicionado
        res.innerHTML = ''
    } else {
        window.alert("Erro: Valor inválido ou já encontrado na lista. Digite um numero de 1 a 100!")
    }
    // limpa o input sempre que é adicionado um novo número
    numero.value = ''
    num.focus()
}
 
function finalizar() {
    if (numeros.length == 0) {
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        res.innerHTML = ''
        //chama todas as funções que imprimem os resultados na div
        total()
        maior()
        menor()
        soma()
        media()
    }
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

