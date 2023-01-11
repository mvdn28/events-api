const express = require('express')
const bookingController = require('../controllers/bookingController')
const eventController = require('../controllers/eventController')

const requestLog = require("../middlewares/requestLog")

const eventsValidation = require('../validation/events')
const bookingsValidation = require('../validation/bookings')

const routes = express.Router()


routes.get('/events/',requestLog , eventController.listarEventos)
routes.get('/events/:id',requestLog , eventController.eventoPorId)
routes.post('/events/',eventsValidation ,requestLog , eventController.criarEvento)
routes.delete('/events/:id',requestLog , eventController.deletarEvento)
routes.put('/events/:id',requestLog , eventController.atualizarEvento)

routes.get('/bookings/',requestLog , bookingController.listarReservas)
routes.get('/bookings/:id',requestLog , bookingController.reservaPorId)
routes.get('/bookings/event/:eventID',requestLog , bookingController.reservaPorIdDoEvento)
routes.post('/bookings/',bookingsValidation ,requestLog , bookingController.criarReserva)
routes.delete('/bookings/:id',requestLog , bookingController.deletarReserva)


module.exports = routes