const express = require('express');

const router = express.Router();

const queries = require('../db/querries');

router.get('/users', (req, res) => {
	queries.users.getAll().then((user) => {
		res.json(user);
	});
});

router.get('/users/:user_id', (req, res) => {
	queries.users.getOne(req.params.user_id).then((user) => {
		res.json(user);
	});
});

router.post('/users', (req, res) => {
	queries.users.create(req.body).then((result) => {
		res.send(result);
	});
});

router.put('/users/:user_id', (req, res) => {
	queries.users.updateUser(req.params.user_id, req.body).then((result) => {
		res.send(result[0]);
	});
});

router.delete('/users/:user_id', (req, res) => {
	queries.users.deleteUser(req.params.user_id).then(() => {
		res.json({
			deleted: true,
		});
	});
});

module.exports = router;
