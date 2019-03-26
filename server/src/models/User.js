const sequelize = require('sequelize');
const config = require('../config/config');

const sql = new sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.options
);
/****
 * DataTypes: it is property of the sequelize, and not the object create using new (and stored in sql)
 */
const m = sql.define('User', {
    /****
     * we have User_id as primary field instead of id
     */
    User_id: {
        type: sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: sequelize.DataTypes.STRING,
        unique: true
    },
    password: {
        type: sequelize.DataTypes.STRING
    },
},{
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    /****
     * disable the modification of table names; By default, sequelize will automatically
     * transform all passed model names (first parameter of define) into plural.
     * if you don't want that, set the following
     */
    freezeTableName: true,
    // define the table's name
    tableName: 'User',
});
module.exports = m;



/*module.exports = function(sql, DataTypes) {
    /***
     * for some reason, the fat arrow is not working.
     * see https://stackoverflow.com/questions/40641435/how-can-sequelize-import-import-models-from-another-file
     * 
    
    const m = sql.define('User', {
        
        
        
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    });
    return m;
};
///router(app);
/*****
 * models. As this is a folder, the models/index.js is executed
 */
///require('./models');