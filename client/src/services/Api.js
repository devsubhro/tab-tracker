/* jslint node: true, es6: true */

/* jshint node: true, esversion: 6 */

/* eslint-env node, es6 */
'use strict';

import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'http://localhost:8081'
});
/* export default function() {
    return axios.create({
        baseURL: 'http://localhost:8081'
    });
};*/
