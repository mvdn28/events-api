const Bookings = require('./Bookings')
const Events = require('./Events')

Events.hasMany(Bookings,{
    foreignKey:'event_id'
})

Bookings.belongsTo(Events,{
    foreignKey:'event_id'
})

module.exports = {
    Bookings,
    Events
}