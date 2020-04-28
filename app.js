const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(users);

app.listen(port, () => {
	console.log('Listening on port: ', port);
});
