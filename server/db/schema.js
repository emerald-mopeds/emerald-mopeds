/*exports.up = function (knex, Promise) {
  knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('password');
  });
  knex.schema.createTable('clients', function (table) {
    table.increments('id').primary();
    table.string('name');
  });
  knex.schema.createTable('authors_books', function (table) {
    table.integer('author_id').references('authors.id');
    table.integer('book_id').references('books.id');
  });
  return knex.schema;
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('books')
    .dropTable('authors')
    .dropTable('authors_books');
};
*/
