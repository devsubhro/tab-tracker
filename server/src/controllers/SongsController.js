const Song = require('../models/Song');

module.exports = {
    getAll: async (req, resp) => {
        try {
            const songs = await Song.findAll({
                limit: 10
            }); 
            resp.send(JSON.stringify(songs));
        } catch (e) {
            resp.status(200).send({
                error: e
            });
            return;
        }
    }
}