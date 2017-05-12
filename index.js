const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: false
}))

app.get('/users', mainCtrl.getAllUsers);
app.get('/users/:name', mainCtrl.getUserByName);
app.get('/secrets', mainCtrl.getSecrets);

app.post('/users', mainCtrl.addUser);
app.post('/auth/login', mainCtrl.login);

app.delete('/users/:name', mainCtrl.deleteUserByName);



app.listen(3000, console.log('boo-ya'));