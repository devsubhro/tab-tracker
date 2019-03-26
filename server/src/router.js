module.exports = (app) => {
    /****
     * we need a simple request end-point
     * GET http://host:port/status
     */
    app.get("/status", (req, resp) => {
        resp.send({
            message: "hello and welcome"
        });
    });
    /****
     * member register method
     * POST
     */
    app.post("/register", (req, resp) => {
        resp.send(`Hi ${req.body.email}, you are registered with ${req.body.password}! Have fun!`);
    });
};