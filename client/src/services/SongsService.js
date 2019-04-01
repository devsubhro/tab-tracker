/* jslint node: true, es6: true */

/* jshint node: true, esversion: 6 */

/* eslint-env node, es6 */
'use strict';

import {HTTP} from '@/services/Api';

export default {
    getAllSongs () {
        return HTTP.get('/songs');
    },
    create (song) {
        // POST type request, and we send the song obj literal containing the data
        return HTTP.post('/post', song);
    },
    getSong (song_id) {
        return HTTP.get(`/songs/view/${song_id}`, song_id);
    }
};