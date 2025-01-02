// Solução 2

// const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca']
// const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Josué', 'Natália', 'Bianca']
const listaDeContatos = []

// Solução com do while

let encontrouUsuarioOuPercorreuaLista = false
let indiceDoUsuario = 0

do {
    const usuarioAtual = listaDeContatos[indiceDoUsuario]
    if ( usuarioAtual && usuarioAtual.startsWith('Z')) {
        encontrouUsuarioOuPercorreuaLista = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    indiceDoUsuario = indiceDoUsuario + 1

    if (indiceDoUsuario >= listaDeContatos.length){
        encontrouUsuarioOuPercorreuaLista = true
        console.log('Usuário não foi encontrado')
    }
} while(!encontrouUsuarioOuPercorreuaLista)



