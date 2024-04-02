
const express = require('express');
const nodemailer = require("nodemailer");
const https = require('https');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const session = require('express-session');
const MongoSession = require('connect-mongodb-session')(session); 
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const multer = require('multer'); // Middleware for handling file uploads

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static('mywebsite')); 
const cors = require('cors');
app.use(cors({ origin: '*' }));

alert('WQEQWEW');
const routeofrecoveringpass = require('./apijs.js');
routeofrecoveringpass();
