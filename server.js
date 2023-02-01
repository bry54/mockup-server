'use strict';
const jsonServer = require('json-server')
const faker = require('@faker-js/faker');
const path = require('path');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Server Config
const server = jsonServer.create()
const router = jsonServer.router( path.join(__dirname, 'db/db.json') )
const middlewares = jsonServer.defaults()

const isAuthorized = (req) => {
    return true
}

const publishCustomRoutes = () =>{
    // Add custom routes before JSON Server router
    server.get('/auth/login', (req, res) => {
        console.log({db: router.db})
        res.jsonp(req.query)
    })
}

server.use(middlewares)
server.use(jsonServer.bodyParser)

publishCustomRoutes();

server.use(router)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.id = faker.faker.datatype.uuid()
        req.body.createdAt = Date.now()
    }
    next()
})

server.listen(PORT, () => {
    console.log(`JSON Server is running on http://${HOST}:${PORT}`)
})