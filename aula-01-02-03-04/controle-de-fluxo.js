const numero1 = 20
const numero2 = 20
const stringdenumero = 30



if (numero1 > 1){
    console.log('Este número é maior que 1')
}

if (numero1 > 200){
    console.log('Este número é maior que 200')
}
else{
    console.log('Este número é menor que 200')
} 

if (numero2 < numero1){
    console.log(`${numero2} é menor ou igual a ${numero1}`)
}

if(numero1 == stringdenumero){
    console.log('Os números são iguais apenas(podem ter ocorrido coerções ímplicitas)')
}

if (numero1 === stringdenumero){
    console.log('Os números são iguais em valor e tipo')
}