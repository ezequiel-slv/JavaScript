// incrementação

console.log("Exercicio 1")
let num = 10

if((num%2) != 0){
    console.log(num++)
    console.log(num)
}else{
    console.log(num--)
    console.log(num)
}

console.log("Exercicio 2")
let num2 = 5
let num3 = 4

let soma = num2 + num3

if((soma) == 10){
    console.log("erro")
}else if(num2  + (++num3) == 10){
    console.log("numeros somados")   
}