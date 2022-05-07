
exports.up = function(knex) {
    return knex.schema
        .createTable('tb_fornecedor', (table) => {
            table.increments('id').primary()
            table.string('nome', 200).notNull()
            table.string('cnpj', 13).notNull()
            table.string('matricula', 20).notNull()
            table.string('cidade', 100).notNull()
            table.string('bairro', 100).notNull()
            table.string('numero').notNull()
            table.string('rua', 100).notNull()
            table.string('estado', 2).notNull()
            table.string('cep', 8).notNull()
            table.string('telefone', 11).notNull()
            table.date('deletadoEm')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_fornecedor')
};
