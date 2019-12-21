const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/homecare-services', (req, res) => {
	res.render('homecare-services');
});

app.get('/family-support', (req, res) => {
	res.render('family-support');
});

app.get('/hospital-to-home', (req, res) => {
	res.render('hospital-to-home');
});

app.get('/care-resources', (req, res) => {
	res.render('care-resources');
});

app.listen(80, () => {
	console.log('The application is running in port 80!');
});