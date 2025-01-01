const user = {
    name: 'JoSÉ mARIa SOUSA santos',
    email: 'JOSE.M1@gmail.com',
    age: 23,
    address: 'X street'
}

// Quando devo usar for ...in? Quando for manipular objetos
// Quando devo usar for ...of? Quando for manipular arrays
// Má prática, evitem ao máximo de utilizar for in com arrays

for (const key in user){
    if(key === 'name'){
        const names = user[key].split(' ')
        user[key] = ''

        for(const name of names){
            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizedName


            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('')
            user[key] = user[key].trim()
        }
    }

    if(key === 'email'){
        user[key] = user[key].toLowerCase()
    }
}

console.log(user)