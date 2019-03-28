/*****
 * since this is a folder, the index.js inside models is executed
 */
const User = require('../models/User');

const jwt = require('jsonwebtoken');

const config = require('../config/config');

function jwtSignUser(user_json) {
    const ONE_WEEK = 7 * 24 * 60 * 60;
    return jwt.sign(user_json, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    });
}

module.exports = {
    
    register: async (req, resp) => {
        try {
            const user = await User.create({
                email: req.body.email,
                password: req.body.password
            });
            resp.send(user.toJSON());
        } catch (err) {
            console.log(err);
            resp.send('Oops');
        }
    },

    login: async (req, resp) => {
        try {
            const email = req.body.email;
            const given_password = req.body.password
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if(!user) {
                resp.status(200).send({
                    error: 'No such member'
                });
                return;
            }
            /****
             * we now store the password hash and added a method to User model to check the password
             */
            let m = false;
            try {
                m = await user.verifyPassword(given_password);
            } catch (e) {
                //do nothing
            }
            
            if(!m) {
                resp.status(200).send({
                    error: 'Incorrect password'
                });
                return;
            }
            
            const userJSON = user.toJSON();
            resp.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            });
            return;
        } catch (err) {
            console.log(err);
            resp.send('Oops');
            return;
        }
    }
}