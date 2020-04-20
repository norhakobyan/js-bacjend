const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const config = require('./config/index');

const app = express();

const ImageUrls = require('./lib/service');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());
app.use('/image', ImageUrls);
 
app.listen(config.server.port);