const knex = require('./knex');

module.exports = {
	users: {
		getAll: function () {
			return knex('user');
		},
		getOne: function (user_id) {
			return knex('user').where('user_id', user_id);
		},
		create: function (user) {
			return knex('user').insert(user);
		},
		updateUser: function (user_id, user) {
			return knex('user').where('user_id', user_id).update(user);
		},
		deleteUser: function (user_id) {
			return knex('user').where('user_id', user_id).del();
		},
	},
};
