//operadores logicos: &&, || e !

let num1 = 0, num2 = 0, num3 = 0

num1 = 10
num2 = 35
num3 = 20

if(num2 && num3 > num1){
    console.log("true")
}
if((num1 < num3) || (num2 > num3)){
    console.log("true")
}if(!num1){
    console.log('num1 alterado')
}else{
    console.log("false")
}