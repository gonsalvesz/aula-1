import { Router } from "express";

const userRoutes = Router()
import { randomUUID } from 'crypto';
import { readFileSync, writeFile, writeFileSync } from 'fs';
import dbJson from './server.json'

// Corrigir o nome da interface para 'User' em vez de 'IUser'
interface IUser {
    id: string
    name: string;
    age: number;
}

// interface ICreateUserDTO{
//     name: string
//     age: string

// }

const dbJsonPath = path.resolve(process.cwd(), 'server.json')
type ICreateUserDTO = Omit<User, "id">
const users: User[] = dbJson.users
const UserRouter = Router()


UserRouter.get('/api', (request, response) => {
    // O código abaixo envia uma resposta simples
    return response.status(200).send('<h1>Api</h1>');
});


UserRouter.post('/api/users', (request, response) => {
    const {name, age}: ICreateUserDTO = request.body

    if(!name || (age && Number(age) < 0)){
        const errMessage = 'O usuário a ser criado precisa de nome e idade'
        return response.status(400).send(errMessage)
    }

    const user = { id: randomUUID(), name, age }


    users.push(user)

    users.push(user)

    await writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users}))

    return response.status(201).json(users);
});


UserRouter.put('/api/users', (request, response) => {
    // Retorna o array de usuários em formato JSON
    return response.json(users);
});

UserRouter.use(userRoutes)


UserRouter.delete('/api/users/:id', (request, response) => {
    const id = request.params.id

    if(!id) {
        const errMessage = 'O usuário a ser deletado precisa de um id'
        return response.status(400).send(errMessage)
    }

    const foundUser = users.find(user => user.id !== id)

    if (!foundUser) {
        const errMessage = `Usuário com id ${id} não foi encontrado`
        return response.status(400).send(errMessage)
    }

    const updateUsers = users.filter(user => user.id !== id)

    await writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users:
        updateUsers }))

        return response.status(204).json()

});

export {userRoutes}

