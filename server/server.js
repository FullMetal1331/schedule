const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(bodyParser.json());
app.use(cors());

//signin
app.post('/signin', (req, res) => {
	console.log(req.body);
	res.json('yo');
});

//register
app.post('/register', (req, res) => {
	console.log(req.body);
	res.json('yo');
});

app.listen(3000);