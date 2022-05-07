
exports.up = function(knex) {
    return knex.schema.createTable('tb_compra_fornecedor', (table) => {
        table.increments('id').primary()
        table.float('valor').notNull()
        table.date('data_compra').notNull()
        table.integer('id_gerente').unsigned().references('id').inTable('tb_funcionario').notNull()
        table.integer('id_fornecedor').unsigned().references('id').inTable('tb_fornecedor').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_compra_fornecedor')
};
