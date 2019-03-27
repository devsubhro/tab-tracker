const joi = require('joi');

module.exports = {
    //the name is same as the function name in AuthenticationController
    // this will be attached as middleware
    //this will be attached in /router.js
    register: function(req, resp, next) {
        const schema = {
            email: joi.string().email(),
            password: joi.string().regex(new RegExp('^[0-9a-zA-Z]{8,32}$'))
        };
        //console.log(req.body);
        const {error, value} = joi.validate(req.body, schema);
        if (error) {
            //which validation failed?
            switch (error.details[0].context.key) {
                
            case 'email':
                resp.status(400).send({
                    error: 'Please provide a valid email address'
                });
                break;

            case 'password':
                resp.status(400).send({
                    error: 'Please provide a valid password'
                });
                break;

            default:
                resp.status(200).send({
                    error: 'Unknown error. please try again'
                });
            }
        } else {
            next();
        }
    }
}