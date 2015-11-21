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
  }), tableCreated('users'),
  knex.schema.createTableIfNotExists('clients', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id');
    table.string('name');
    table.string('address');
    table.string('city');
    table.integer('zip_code');
    table.integer('phone');
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
    table.integer('phone');
  }), tableCreated('employees'),
  knex.schema.createTableIfNotExists('tasks', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id');
    table.string('task_name');
    table.integer('default_price');
    table.boolean('common');
  }), tableCreated('tasks'),
  knex.schema.createTableIfNotExists('expenses', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id');
    table.string('expense_name');
    table.boolean('common');
    table.integer('unit_price');
  }), tableCreated('expenses'),
  knex.schema.createTableIfNotExists('jobs', function (table) {
    table.increments('id').primary();
    table.integer('client_id').unsigned().references('clients.id');
    table.string('job_status');
  }), tableCreated('jobs'),
  knex.schema.createTableIfNotExists('jobs_tasks', function (table) {
    table.increments('id').primary();
    table.integer('job_id').unsigned().references('jobs.id');
    table.integer('task_id').unsigned().references('tasks.id');
    table.string('status');
  }), tableCreated('jobs_tasks'),
  knex.schema.createTableIfNotExists('expenses_jobs_tasks', function (table) {
    table.increments('id').primary();
    table.integer('job_task_id').unsigned().references('jobs_tasks.id');
    table.integer('expense_id').unsigned().references('expenses.id');
    table.integer('quantity');
  }), tableCreated('expenses_jobs_tasks'),
  knex.schema.createTableIfNotExists('employees_jobs_tasks', function (table) {
    table.increments('id').primary();
    table.integer('job_task_id').unsigned().references('jobs_tasks.id');
    table.integer('employee_id').unsigned().references('employees.id');
    table.integer('time_spent');
  }), tableCreated('employees_jobs_tasks')
]);

/*
db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username').unique();
      table.string('email');
      table.string('password');
    }).then(function (table) {
      console.log('Created Table "users"');
    });
  }
});
.createTable('clients', function (table) {
  table.increments('id').primary();
  table.integer('user_id').unsigned().references('users.id');
  table.string('name');
  table.string('address');
  table.string('city');
  table.integer('zip_code');
  table.integer('phone');
})
.createTable('employees', function (table) {
  table.increments('id').primary();
  table.integer('user_id').unsigned().references('users.id');
  table.string('first_name');
  table.string('last_name');
  table.string('address');
  table.string('city');
  table.integer('zip_code');
  table.integer('hourly_billing_fee');
  table.integer('phone');
})
.createTable('tasks', function (table) {
  table.increments('id').primary();
  table.integer('user_id').unsigned().references('users.id');
  table.string('task_name');
  table.integer('default_price');
  table.boolean('common');
})
.createTable('expenses', function (table) {
  table.increments('id').primary();
  table.integer('user_id').unsigned().references('users.id');
  table.string('expense_name');
  table.boolean('common');
  table.integer('unit_price');
})
.createTable('jobs', function (table) {
  table.increments('id').primary();
  table.integer('client_id').unsigned().references('clients.id');
  table.string('status');
})
.createTable('job_tasks', function (table) {
  table.increments('id').primary();
  table.integer('job_id').unsigned().references('jobs.id');
  table.integer('task_id').unsigned().references('tasks.id');
  table.string('status');
})
.createTable('join_job_task_expense', function (table) {
  table.increments('id').primary();
  table.integer('job_task_id').unsigned().references('join_job_tasks.id');
  table.integer('expense_id').unsigned().references('expenses.id');
  table.integer('quantity');
})
.createTable('join_job_task_employee', function (table) {
  table.increments('id').primary();
  table.integer('job_task_id').unsigned().references('join_job_tasks.id');
  table.integer('employee_id').unsigned().references('employees.id');
  table.integer('time_spent');
});


*/
