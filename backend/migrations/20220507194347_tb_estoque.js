
exports.up = function(knex) {
    return knex.schema
        .createTable('tb_estoque', (table) => {
            table.increments('id').primary()
            table.string('categoria').notNull()
            table.integer('quantidade').notNull()
            table.float('valor').notNull()
            table.string('nome', 200).notNull()
            table.date('data_validade').notNull()
            table.date('deletadoEm')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_estoque')
};
