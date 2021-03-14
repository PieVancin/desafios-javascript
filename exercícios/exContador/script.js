function contar() {
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passso = document.getElementById("passo")
    let resultado = document.getElementById("resultado")

    if (inicio.value.length == 0 || passso.value.length == 0 || fim.value.length == 0) {
        window.alert('Erro')
    } else {
        resultado.innerHTML = `Contando... <br>`
    }
    let ini = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
        resultado.innerHTML = `Passo inválido, considerando passo 1:<br>`
        p = 1
    }

    if (ini < f) {
        for (ini; ini <= f; ini += p) {
            resultado.innerHTML += `${ini} \u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
    } else {
        for (ini; ini >= f; ini -= p) {
            resultado.innerHTML += `${ini} \u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}