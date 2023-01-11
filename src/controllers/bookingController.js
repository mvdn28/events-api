const {Bookings, Events} = require("../models");

const bookingController = {
    async listarReservas(req, res){
        try {
            const bookings = await Bookings.findAll();
            await Promise.all(bookings.map(async(booking) => {
                let event = await Events.findByPk(booking.dataValues.event_id)
                booking.dataValues.event=event.dataValues
            }))
            return await res.status(200).json(bookings);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }        
    },

    async reservaPorId(req, res){
        try {
            const {id} = req.params;

            const booking = await Bookings.findByPk(id);
            const event = await Events.findByPk(booking.dataValues.event_id)
            booking.dataValues.event=event.dataValues

            if(!booking){
                return res.status(404).json("Id não encontrado.");
            }

            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }  
    },

    async reservaPorIdDoEvento(req, res){
        try {
            const {eventID} = req.params;

            const bookings = await Bookings.findAll({where:{event_id:eventID}});

            if(!bookings){
                return res.status(404).json("Id não encontrado.");
            }

            await Promise.all(bookings.map(async(booking) => {
                let event = await Events.findByPk(booking.dataValues.event_id)
                booking.dataValues.event=event.dataValues
            }))

            return await res.status(200).json(bookings);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }  
    },

    async criarReserva(req, res){
        try {
            const {owner_name, owner_email, number_tickets, event_id} = req.body;

            const newBooking = await Bookings.create({
                owner_name, 
                owner_email, 
                number_tickets, 
                event_id
            });

            return res.status(201).json(newBooking);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }  
    },

    async deletarReserva(req, res){
        try {
            const {id} = req.params;

            const booking = await Bookings.findByPk(id);

            if(!booking){
                return res.status(404).json("Id não encontrado.");
            }

            await Bookings.destroy({
                where: {id}
            });

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }
    },
}

module.exports = bookingController;