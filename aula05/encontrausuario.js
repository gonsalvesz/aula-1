const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca']

// solução 1

// while (!encontrouUsuario && !atingiuFimdaLista){
//     const usuarioAtual = listaDeContatos[indiceDoUsuario]
//     if (usuarioAtual.startsWith('Z')){
//         encontrouUsuario = true
//         console.log(`Usuário Encontrado: ${usuarioAtual}`)
        
//     }

//     indiceDoUsuario = indiceDoUsuario + 1

//     if (indiceDoUsuario === listaDeContatos.length){
//        atingiuFimdaLista = true
//         console.log('Usuário não foi encontrado')
//     }
// }

// Solução 2

let encontrouUsuarioOuPercorreuaLista = false
let indiceDoUsuario = 0

while (!encontrouUsuarioOuPercorreuaLista) {
    const usuarioAtual = listaDeContatos[indiceDoUsuario]
    if (usuarioAtual.startsWith('Z')) {
        encontrouUsuarioOuPercorreuaLista = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    indiceDoUsuario = indiceDoUsuario + 1

    if (indiceDoUsuario === listaDeContatos.length){
        encontrouUsuarioOuPercorreuaLista = true
        console.log('Usuário não foi encontrado')
    }
}