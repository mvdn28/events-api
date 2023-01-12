const {Events} = require("../models");

const eventController = {
    async listarEventos(req, res){
        try {
            const events = await Events.findAll();
            return res.status(200).json(events);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }        
    },

    async eventoPorId(req, res){
        try {
            const {id} = req.params;

            const event = await Events.findByPk(id);

            if(!event){
                return res.status(404).json("Id não encontrado.");
            }

            return res.status(200).json(event);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }  
    },

    async criarEvento(req, res){
        try {
            const {name, poster, attractions, description, scheduled, number_tickets} = req.body;

            const newEvent = await Events.create({
                name, 
                poster, 
                attractions, 
                description, 
                scheduled, 
                number_tickets
            });

            return res.status(201).json(newEvent);
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }  
    },

    async atualizarEvento(req, res){
        try {
            const {id} = req.params;
            const {name, poster, attractions, description, scheduled, number_tickets} = req.body;

            const event = await Events.findByPk(id);

            if(!event){
                return res.status(404).json("Id não encontrado.");
            }

            await Events.update({
                name, 
                poster, 
                attractions, 
                description, 
                scheduled, 
                number_tickets
            }, {where: {id}});

            const updatedEvent = await Events.findByPk(id);

            return res.status(200).json(updatedEvent);
        } catch (error) {
           return res.status(500).json("Erro ao processar...");
        }  
    },

    async deletarEvento(req, res){
        try {
            const {id} = req.params;

            const event = await Events.findByPk(id);

            if(!event){
                return res.status(404).json("Id não encontrado.");
            }

            await Events.destroy({
                where: {id}
            });

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json("Erro ao processar...");
        }
    },
}

module.exports = eventController;