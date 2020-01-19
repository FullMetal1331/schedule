const express = require('express');
const bodyParser = require('body-parser');

const app = express(bodyParser.json());

app.use()

app.get('/', (req, res) => {
	res.send('getting root');
});

app.listen(3000);