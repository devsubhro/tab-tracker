/* jslint node: true, es6: true */

/* jshint node: true, esversion: 6 */

/* eslint-env node, es6 */
'use strict';

import {HTTP} from '@/services/Api';

export default {
    register(credentials) {
        return HTTP.post('/register', credentials);
    }
};
/**
 * from another part, we can import the AuthenticationService module, then
 * AuthenticationService.register({
 *   email: 'test@gmail.com,
 *   password: '123456'
 * })
 */