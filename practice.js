
const Hapi = require('@hapi/hapi');
const fetch = require('node-fetch');

let init = async () => {

    const server = Hapi.server({
        port: 1234,
        host: 'localhost'
    });

    await server.register(require('@hapi/inert'));

    server.route({
        method: 'GET',
        path: '/{userID?}',
        handler: async (request, h) => {
            // fetch returns a promise containing the response object. The json() method extracts the JSON body.
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const users = await response.json();
            console.log(users.length);
            let myArray = [];
            return "hi!";
        }
    });

    server.route({
        method: 'GET',
        path: '/users',
        handler: (request, h) => {
            return "These are the users!";
        }
    })

    await server.start();

}

init();




