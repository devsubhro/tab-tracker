const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
/***
 * request logger middleware
 */
const morgan = require("morgan");

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
 * get the routes from router.js
 * we pass the app and the function attach the handler to app
 */
const router = require('./router');
router(app);


/****
 * process.env.PORT || 8081
 * we now use config obj
 */
app.listen(config.port);
console.log(`server listening on port ${config.port}`);