const Sequelize = require("sequelize");

const DB_NAME = "eventsapi";
const DB_USER = "root";
const DB_PASS = "mysql2805";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("DB conectado!");
    } catch (error) {
        console.error("Erro ao tentar se conectar ao banco de dados.");
    }
}

Object.assign(db, {
    hasConnection,
});

module.exports = db;