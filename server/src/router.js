const DefaultController = require('./controllers/DefaultController');
const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
    /****
     * we need a simple request end-point
     * GET http://host:port/status
     * 
     * We will now use the function defined in DefaultController.welcome
     * (which holds pointer to a function that accepts 2 arguments)
     */
    app.get("/", DefaultController.welcome);
    /****
     * member register method
     * POST
     */
    app.post("/register", AuthenticationController.register);
};