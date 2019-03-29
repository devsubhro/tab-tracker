/* jslint node: true, es6: true */

/* jshint node: true, esversion: 6 */

/* eslint-env node, es6 */
'use strict';

import {HTTP} from '@/services/Api';

export default {
    getAllSongs () {
        return HTTP.get('/songs');
    }
};