const express = require('express');
const path = require('path');

const router = require(path.join(__dirname, 'router/router'));

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({'extended': false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', router);

app.listen(5000);

