// break & continue

let n = 0
let num= 1000
let pares = 0

console.log("Break")
while (n<num) {
    console.log("valor: " + n)
    if (n>10) {
        break
    }
    n++
}

console.log("Continue")

for (let i = n; i < num; i++) {
    if (i%2!=0) {
        continue //quando é impar o programa continua contando os pares
    }
    pares++
}


console.log("Quantidade de pares: " + pares)
console.log("Fim do programa")