const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
/***
 * request logger middleware
 */
const morgan = require("morgan");

const {sequelize} = require("./models");
const config = require('./config/config');

const app = express();
const req_logger = morgan("combined");
const req_parser = body_parser.json();
const req_cors = cors();
/****
 * register the  middlewares
 */
app.use(req_logger);
app.use(req_parser);
app.use(req_cors);

/***
 * we need a simple request end-point
 */
app.get("/status", (req, resp) => {
    resp.send({
        message: "hello and welcome"
    });
});

app.post("/register", (req, resp) => {
    resp.send(`Hi ${req.body.email}, you are registered with ${req.body.password}! Have fun!`);
});

/****
 * process.env.PORT || 8081
 * we now use config obj
 */
app.listen(config.port);
console.log(`server listening on port ${config.port}`);