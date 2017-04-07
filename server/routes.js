const express = require('express')
const passport = require('passport');
const passportService = require('./services/passport');


const basicController = require('./controllers/basicController')
const bookController = require('./controllers/bookController')
const userController = require('./controllers/userController')
const tradeController = require('./controllers/tradeController')


const routes = express()

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })


routes.get('/', basicController.get)

routes.get('/book/:id', bookController.get)
routes.get('/books', bookController.getAll)

routes.get('/user/:id', userController.get)

routes.post('/user/signup', userController.signup)
routes.post('/user/signin', requireSignin, userController.signin)

routes.patch('/user/:userId/updateinfo', userController.updateinfo)

routes.post('/user/:userId/addbook', requireAuth, bookController.addBook)

//trade
routes.patch('/book/:bookId/request', tradeController.reqbook)
routes.patch('/book/:bookId/cancelreq', tradeController.cancelReq)

module.exports = routes