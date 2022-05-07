
exports.up = function(knex) {
    return knex.schema.createTable('tb_vendas', (table) => {
        table.increments('id').primary()
        table.float('valor').notNull()
        table.date('data_venda').notNull()
        table.integer('quantidade').notNull()
        table.integer('id_vendedor').unsigned().references('id').inTable('tb_funcionario').notNull()
        table.integer('id_cliente').unsigned().references('id').inTable('tb_cliente').notNull()
        table.integer('id_produto').unsigned().references('id').inTable('tb_estoque').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_vendas')
};
