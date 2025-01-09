//operadores relacionais: >, >=, <, <=, ==, !=

//exercicio: faça um prógŕamá que apresente ação a ser aplicada ao motorista de acordo com a velocidade do veiculo em km

medirvelocidade (60)
medirvelocidade (90)
medirvelocidade (101)

function medirvelocidade(velocidade){
    if((velocidade <= 60) && (velocidade >= 60)){
        console.log("Liberar veiculo")
    }
    else if((velocidade >= 90) && (velocidade <= 90)){
        console.log("Aplicar multa")
    }
    else if (velocidade > 100){
        console.log("Suspender carteira")
    }
}