let knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '16050912',
        database: 'relatorios'
    }
});

module.exports = knex;