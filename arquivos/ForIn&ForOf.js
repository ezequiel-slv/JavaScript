// for in e for of

console.log("Inicio do programa")
console.log("-----------")
console.log("in: Imprime a posição da coleção")
let num = [10, 20, 30, 40, 50]
for (n in num) { 
    console.log(n)
}
console.log("of: Imprime os valores da coleção")
for (n of num) { 
    console.log(n)
}
console.log("-----------")
console.log("Fim do programa")