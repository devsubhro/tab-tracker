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
    },
    getSong: async (req, resp) => {
        try {
            const songs = await Song.findAll({
                where: {
                    /****
                     * in router.js we have app.get("/songs/view/:song_id", SongsController.getSong);
                     */
                    Song_id: req.params.song_id

                },
                limit: 1
            });
            resp.send(JSON.stringify(songs));
        } catch (e) {
            resp.status(200).send({
                error: e
            });
            return;
        }
    },
    post: async (req, resp) => {
        try {
            /****
             * TODO: validation?
             */
            const song = await Song.create(req.body);
            resp.send(JSON.stringify(song));
        } catch (e) {
            resp.status(200).send({
                error: e
            });
            return;
        }
    },
}