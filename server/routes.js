const express = require('express')

const basicController = require('./controllers/basicController')
const bookController = require('./controllers/bookController')
const userController = require('./controllers/userController')
const tradeController = require('./controllers/tradeController')


const routes = express()

routes.get('/', basicController.get)

routes.get('/book/:id', bookController.get)
routes.get('/books', bookController.getAll)

routes.get('/user/:id', userController.get)
routes.post('/user/signup', userController.signup)

routes.post('/user/:userId/addbook', bookController.addBook)

//trade
routes.patch('/book/:bookId/request', tradeController.reqbook)

module.exports = routes