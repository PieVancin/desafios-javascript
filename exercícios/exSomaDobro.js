var x, y, res
x = 2
y = 2
res = somaDobro(x, y)
console.log(`A soma do dobro dos números ${x} e ${y} é ${res}`)

function somaDobro(a,b) {
    var soma
    a = 2 * a
    b = 2 * b
    soma = a + b
    return soma
}