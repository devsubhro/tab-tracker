# tab-tracker
package.json, scripts, start
/*"start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",*/

Full Stack Web App using Vue.js &amp; Express.js
freeCodeCamp.org
https://www.youtube.com/watch?v=Fa4cRMaTDUI

we will use vue-cli to ceate the initial front-end

add this to path /var/www/html/node/webapp/tab-tracker/node_modules/vue-cli/bin

open /home/sng/.profile and
export PATH=$PATH:...:/var/www/html/node/webapp/tab-tracker/node_modules/vue-cli/bin

vue init <template-name> <project-name>

vue list
browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
browserify-simple - A simple Browserify + vueify setup for quick prototyping.
pwa - PWA template for vue-cli based on the webpack template
simple - The simplest possible Vue setup in a single HTML file
webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.

vue init webpack client

RUN client
cd client
npm install
npm run dev


> client@1.0.0 dev /var/www/html/node/webapp/tab-tracker/client
> webpack-dev-server --inline --progress --config build/webpack.dev.conf.js

 12% building modules 19/27 modules 8 active ...webapp/tab-tracker/client/src/App.vue{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.
 95% emitting                                                                         

 DONE  Compiled successfully in 30471ms                                                                                             1:38:28 PM

 I  Your application is running here: http://localhost:8080
------------------------------
server
cd ..
mkdir server
cd server
npm init -f

install nodemon
npm install nodemon
npm install eslint

mkdir src
cd src
create app.js
npm start
ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

    eslint --init
cd ..
/tab-tracker/server/$ node ./node_modules/eslint/bin/eslint.js --init
Successfully created .eslintrc.js file in /var/www/html/node/webapp/tab-tracker/server

(need to add no-console: 0 otherwise every console.log() will trigger error)

in /server/package.json, update to
"lint": "./node_modules/.bin/eslint src/*.js"

from /server$ node ./node_modules/.bin/eslint */*.js

/tab-tracker/server/src$ npm start
> server@1.0.0 start /var/www/html/node/webapp/tab-tracker/server
> ./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'

[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `npm run lint && node src/app.js`

> server@1.0.0 lint /var/www/html/node/webapp/tab-tracker/server
> eslint */*.js

Hello
[nodemon] clean exit - waiting for changes before restart
(force exit)
/server$ npm install express body-parser cors morgan

the server is listening on port 8081 so
localhost:8081/status will give
{"message":"hello and welcome"}

RUN server: /server/src npm run lint and npm run start
-----------------------
/client$ npm install axios

create /client/src/services
create /client/src/services/Api.js
create /client/src/services/AuthenticationService.js
----------------------
db: mysql
connection using sequelize, use mysql dialect
/server: npm install sequelize mysql2

/server/src create config folder
/server/src/config/config.js

db name: tab-tracker - collation: utf16_unicode_ci
host: localhost
username: root
password: user123
so
const sequelize = require('sequelize');
const sql = new sequelize('tab-tracker', 'root', 'user123', {
    host: 'localhost',
    dialect: 'mysql'
});
---------------------------
/server/src create router.js and put the request handlers there

/server/src -> folder models
/server/src/models -> User.js

/server/src/controllers/ -> AuthenticationController.js
-----------------
create table User manually
----------
User definition -> need extra overrides
--------
email validation with joi

npm install joi
/server/src -> policies to hold validation related codes
-----------------------------
/client npm install vuetify

/server install jsonwebtoken
/server install bcrypt-nodejs

/client npm install vuex
/client npm install vuex-router-sync

/client/src -> create folder store -> store.js

create song, name, image
----------------------------------------
//https://github.com/kaorun343/vue-youtube-embed
/client npm install vue-youtube-embed