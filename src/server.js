//const http = require('http');
import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if(method === 'GET' && url === '/users') {
        return res.end(JSON.stringify(users));
    } 
    if (method === 'POST' && url === '/users/1') {
        users.push({
            id: 1,
            name: 'Alice Peruniz',
            email: 'aliceperuniz@exemplo.com'
        })
        return res.end('Criação de usuário');
    }

    return res.end('Hello World');
});

server.listen(3333, () => console.log('Server is running'));
