/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary();  // Auto-incrementing ID column
		table.string('name', 255).notNullable();  // User's name
		table.string('email', 255).notNullable().unique();  // User's email (must be unique)
		table.string('password', 255);  // User's password (can be null if using OAuth)
		table.timestamps(true, true);  // Adds created_at and updated_at columns
	  });
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
	return knex.schema.dropTableIfExists("users")
}
