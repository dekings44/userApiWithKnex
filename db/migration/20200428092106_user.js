exports.up = function (knex) {
	return knex.schema.createTable('user', (table) => {
		table.increments('user_id');
		table.string('first_name');
		table.string('last_name');
		table.string('email');
		table.string('address');
		table.integer('age');
		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('user');
};
