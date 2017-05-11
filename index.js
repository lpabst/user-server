const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'wah;alihofiahg',
    resave: true,
    saveUninitialized: false
}))





app.listen(3000, console.log('hi'));