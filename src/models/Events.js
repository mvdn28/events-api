const db = require("../database")
const {DataTypes} = require("sequelize")

const Events = db.define("events", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    poster: {
        type: DataTypes.STRING
    },
    attractions:{
        type: DataTypes.JSON
    },
    description: {
        type: DataTypes.STRING
    },
    scheduled: {
        type: DataTypes.DATE
    },
    number_tickets:{
        type:DataTypes.INTEGER
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    },
},{
    tablename:'events'
}
)

module.exports = Events