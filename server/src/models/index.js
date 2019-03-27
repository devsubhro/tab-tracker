/*****
 * this is called when a folder is required instead of a .js file
 */
//const fs = require('fs');
//const path = require('path');
const sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sql = new sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.options
);

/*const u = require('./User');
console.log(u);
/*const model_file_names_arr = fs.readdirSync(__dirname).filter((file_name) => {
    return file_name !== 'index.js';
});
model_file_names_arr.forEach((file_name) => {
    const model = sql.import(path.join(__dirname, file_name));
    console.log(model);
    //db[model.name] = model;
});*/

/****
 * need access to 
 */
db.sequelize = sequelize;
db.sql = sql;
module.exports = db;