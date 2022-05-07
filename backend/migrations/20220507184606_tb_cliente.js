
exports.up = function(knex) {
    return knex.schema
        .createTable('tb_cliente', (table) => {
            table.increments('id').primary()
            table.string('nome', 200).notNull()
            table.date('data_nascimento').notNull()
            table.string('matricula', 20).notNull()
            table.string('cpf', 11).notNull()
            table.string('telefone', 11).notNull()
            table.string('cidade', 100).notNull()
            table.string('bairro', 100).notNull()
            table.string('numero').notNull()
            table.string('rua').notNull()
            table.string('estado', 2).notNull()
            table.string('cep', 8).notNull()
            table.date('deletadoEm')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_cliente')
};
