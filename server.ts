import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import { randomUUID } from 'crypto';
import { readFileSync, writeFile, writeFileSync } from 'fs';
import dbJson from './server.json'
import cors from 'cors'

// Corrigir o nome da interface para 'User' em vez de 'IUser'
interface User {
    id: string
    name: string;
    age: number;
}

// interface ICreateUserDTO{
//     name: string
//     age: string

// }

type ICreateUserDTO = Omit<User, "id">

config(); // Carregar variáveis de ambiente do arquivo .env
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
const url = process.env.API_BASE_URL ?? 'http://localhost';
const port = Number(process.env.API_PORT ?? 3300); 
const dbJsonPath = path.resolve(process.cwd(), 'server.json');
// const dbJson = readFileSync(dbJsonPath)
// const users: User[] = JSON.parse(dbJson.toString()).users
const users: User[] = dbJson.users
console.log(users)


app.get('/api', (request, response) => {
    // O código abaixo envia uma resposta simples
    return response.status(200).send('<h1>Api</h1>');
});


app.post('/api/users', (request, response) => {
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


app.put('/api/users', (request, response) => {
    // Retorna o array de usuários em formato JSON
    return response.json(users);
});


app.delete('/api/users/:id', (request, response) => {
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



app.listen(port, () => {
    console.log(`Servidor rodando no endereço ${url}:${port}`);
});
