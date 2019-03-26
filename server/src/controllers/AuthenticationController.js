/*****
 * since this is a folder, the index.js inside models is executed
 */
const User = require('../models/User');

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
    }
}