var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'emeraldadmin',
    password : 'password',
    database : 'mopeds',
    charset  : 'utf8'
  }
});

module.exports = db = require('bookshelf')(knex);

function tableCreated (tableName) {
  console.log('Created table', tableName);
}

Promise.all([
  knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary();
    table.string('username').unique();
    table.string('email');
    table.string('password');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('users'),
  knex.schema.createTableIfNotExists('clients', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id');
    table.string('name');
    table.string('address');
    table.string('city');
    table.integer('zip_code');
    table.string('phone');
    table.string('status');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('clients'),
  knex.schema.createTableIfNotExists('employees', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id');
    table.string('first_name');
    table.string('last_name');
    table.string('address');
    table.string('city');
    table.integer('zip_code');
    table.integer('hourly_billing_fee');
    table.string('phone');
    table.string('status');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('employees'),
  knex.schema.createTableIfNotExists('tasks', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id');
    table.string('task_name');
    table.integer('default_price');
    table.boolean('common');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('tasks'),
  knex.schema.createTableIfNotExists('expenses', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id');
    table.string('expense_name');
    table.boolean('common');
    table.integer('unit_price');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('expenses'),
  knex.schema.createTableIfNotExists('jobs', function (table) {
    table.increments('id').primary();
    table.integer('client_id').unsigned().references('clients.id');
    table.string('job_status');
    table.string('job_name');
    table.datetime('due_date');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('jobs'),
  knex.schema.createTableIfNotExists('jobs_tasks', function (table) {
    table.increments('id').primary();
    table.integer('job_id').unsigned().references('jobs.id');
    table.integer('task_id').unsigned().references('tasks.id');
    table.string('status');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('jobs_tasks'),
  knex.schema.createTableIfNotExists('expenses_jobs_tasks', function (table) {
    table.increments('id').primary();
    table.integer('job_task_id').unsigned().references('jobs_tasks.id');
    table.integer('expense_id').unsigned().references('expenses.id');
    table.integer('quantity');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('expenses_jobs_tasks'),
  knex.schema.createTableIfNotExists('employees_jobs_tasks', function (table) {
    table.increments('id').primary();
    table.integer('job_task_id').unsigned().references('jobs_tasks.id');
    table.integer('employee_id').unsigned().references('employees.id');
    table.integer('time_spent');
    table.datetime('updated_at');
    table.datetime('created_at');
  }), tableCreated('employees_jobs_tasks')
]);

