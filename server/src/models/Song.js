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
const Song_schema = sql.define('Song', {
    /****
     * we have Song_id as primary field instead of id
     */
    Song_id: {
        type: sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize.DataTypes.STRING,
        unique: true
    },
    artist: {
        type: sequelize.DataTypes.STRING
    },
    album: {
        type: sequelize.DataTypes.STRING
    },
    genre: {
        type: sequelize.DataTypes.STRING
    },
    album_image_url: {
        type: sequelize.DataTypes.STRING
    },
    youtube_id: {
        type: sequelize.DataTypes.STRING
    },
    lyrics: {
        type: sequelize.DataTypes.TEXT
    },
    tab: {
        type: sequelize.DataTypes.TEXT
    }
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
    tableName: 'Song',
});
module.exports = Song_schema;
