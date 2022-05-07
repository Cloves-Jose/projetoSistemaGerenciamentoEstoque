
exports.up = function(knex) {
    return knex.schema
        .createTable('tb_funcionario', (table) => {
            table.increments('id').primary()
            table.string('login', 20).notNull()
            table.string('senha', 64).notNull()
            table.enu('cargo', ['diretor','gerente','vendedor','servicos-gerais','estoquista']).notNull()
            table.string('nome', 200).notNull()
            table.string('matricula', 20).notNull()
            table.string('PIS', 10).notNull()
            table.string('cidade', 100).notNull()
            table.string('bairro', 100).notNull()
            table.string('numero').notNull()
            table.string('rua', 100).notNull()
            table.string('estado', 2).notNull()
            table.string('cep', 8).notNull()
            table.string('telefone', 11).notNull()
            table.string('cpf', 11).notNull()
            table.enu('administrador', ['sim', 'nao']).notNull()
            table.date('data_nascimento').notNull()
            table.float('comissao').notNull()
            table.date('deletadoEm')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_funcionario')
};
