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

// db.knex.schema.dropTable('users').dropTable('clients');

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.string('password');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('clients').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('clients', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.string('name');
      table.string('address');
      table.string('city');
      table.integer('zip_code');
      table.integer('phone');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('employees').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('employees', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.string('first_name');
      table.string('last_name');
      table.string('address');
      table.string('city');
      table.integer('zip_code');
      table.integer('hourly_billing_fee');
      table.integer('phone');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('tasks').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('tasks', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.string('task_name');
      table.integer('default_price');
      table.boolean('common');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('expenses').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('expenses', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.string('expense_name');
      table.boolean('common');
      table.integer('unit_price');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('jobs').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('jobs', function (table) {
      table.increments('id').primary();
      table.integer('client_id').unsigned().references('clients.id');
      table.string('status');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('join_job_tasks').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('join_job_tasks', function (table) {
      table.increments('id').primary();
      table.integer('job_id').unsigned().references('jobs.id');
      table.integer('task_id').unsigned().references('tasks.id');
      table.string('status');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('join_job_task_expense').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('join_job_task_expense', function (table) {
      table.increments('id').primary();
      table.integer('job_task_id').unsigned().references('join_job_tasks.id');
      table.integer('expense_id').unsigned().references('expenses.id');
      table.integer('quantity');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('join_job_task_employee').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('join_job_task_employee', function (table) {
      table.increments('id').primary();
      table.integer('job_task_id').unsigned().references('join_job_tasks.id');
      table.integer('employee_id').unsigned().references('employees.id');
      table.integer('time_spent');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});


