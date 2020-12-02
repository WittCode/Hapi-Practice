'use strict';

const Hapi = require('@hapi/hapi');
const Hoek = require('@hapi/hoek');
const Path = require('path');


const init = async () => {

    const server = Hapi.Server({
        port: 1234,
        host: 'localhost',
        routes: {
            files: {
                // D:\JavaScriptPractice\Practical-hapi\Static
                relativeTo: Path.join(__dirname, 'Static')
            }
        },
    });

    await server.register(require('@hapi/inert'));

    server.route({
        method: 'GET',
        path: '/subscribe',
        handler: (request, h) => {

            return h.file('subscribe.jpg');
        }

    });

    server.route({
        // Any valid HTTP method, array of HTTP methods, or an * to allow any method.
        method: 'GET',
        // Defines the path including parameters.
        path: '/',
        // Performs the main business logic of the route and sets the response.
        // It must return a value, a promise, or throw an rror.
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path:'/hello/{name?}',
        handler: (request, h) => {
            const name = request.params.name ? request.params.name : 'Unknown';
            return "Hello " + Hoek.escapeHtml(name);
        }
    });

    server.route({
        method: 'GET',
        path: '/multi/{user*2}',
        handler: (request, h) => {
            const userParts = request.params.user.split('/');
            const userFName = userParts[0];
            const userLName = userParts[1];
            return `Hello ${userFName} ${userLName}`;
        }
    });

    server.route({
        method: 'GET',
        path: '/requestParams',
        handler: (request, h) => {
            let {search} = request.query;
            return search;
        }
    });

    server.route({
        method: 'GET',
        path:'/redirectMe',
        handler: (request, h) => {
            return h.redirect('/');
        }
    });

    server.route({
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return "You must be lost!";
        }
    });

    await server.start();

    console.log("Server is running on %s", server.info.uri);
    console.log(Path.join(__dirname, 'Static\\'));

};

init();


