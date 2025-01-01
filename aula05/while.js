 const nomedeusuarios = ['Joana', 'Renata', 'Cleber', 'Zeca', 'Carla']

//  console.log('Olá', nomedeusuarios[0])
//  console.log('Olá', nomedeusuarios[1])
//  console.log('Olá', nomedeusuarios[2])
//  console.log('Olá', nomedeusuarios[3])

 let indiceDoUsuario = 0
 let indiceAtual = nomedeusuarios.length
 console.log({indiceAtual})
 
 while (indiceDoUsuario < indiceAtual) {
   console.log('Olá', nomedeusuarios[indiceDoUsuario])
    indiceDoUsuario = indiceDoUsuario + 1
 }