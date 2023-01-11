const db = require("../database")
const Events = require('./Events')
const {DataTypes} = require("sequelize")

const Bookings = db.define("bookings", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    owner_name: {
        type: DataTypes.STRING
    },
    owner_email: {
        type: DataTypes.STRING
    },
    number_tickets:{
        type:DataTypes.INTEGER
    },
    event_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Events,
            key:'id'
        }
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    },
},{
    tablename:'bookings'
}
)

module.exports = Bookings