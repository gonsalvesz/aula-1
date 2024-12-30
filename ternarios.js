const idade = 19
const temCNH = true


const pddirigir = idade > 18 && temCNH

if(pddirigir){
    console.log('Pessoa está habilitada para conduzir veículo')
}
else {
    console.log('Pessoa não está habilitada para conduzir veículo')
}

const numeroDePassageiros = pddirigir ? 4 : 0

// let numeroDePassageiros
// if (pddirigir) {
//     numeroDePassageiros = 4
// }
// else {
//         numeroDePassageiros = 0
// }

console.log({numeroDePassageiros})