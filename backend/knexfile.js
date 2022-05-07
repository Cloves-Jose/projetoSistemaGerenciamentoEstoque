// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      database: 'api_fiscao',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
