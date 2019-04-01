const DefaultController = require('./controllers/DefaultController');
const AuthenticationController = require('./controllers/AuthenticationController');
const SongsController = require('./controllers/SongsController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

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
     * before handing the control to AuthenticationController.register, we need to
     * run the validation middleware
     */
    app.post("/register", AuthenticationControllerPolicy.register, AuthenticationController.register);
    app.post("/login", AuthenticationController.login);

    app.get("/songs", SongsController.getAll);

    app.post("/post", SongsController.post);
};