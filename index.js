const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./api/beersV2.json')

const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 3000

server.use(middlewares)
server.use(router)
server.listen(PORT)

server.use(jsonServer.rewriter({
  '/api/beersV2' : '/beers' 
}))