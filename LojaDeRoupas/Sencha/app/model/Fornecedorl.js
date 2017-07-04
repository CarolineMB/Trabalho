Ext.define('LojaDeRoupas.model.Fornecedorl', {
    extend: 'Ext.data.Model',

    fields: [
           { name: 'ID_Fornecedor', type: 'int' },
           { name: 'Nome_Fornecedor', type: 'string' },
           { name: 'Telefone1_Fornecedor', type: 'string' },
           { name: 'Telefone2_Fornecedor', type: 'string' },
           { name: 'Cidade_Fornecedor', type: 'string' },
           { name: 'Rua_Fornecedor', type: 'string' },
           { name: 'Num_End_Fornecedor', type: 'int' },
           { name: 'Email_Fornecedor', type: 'string' },
           { name: 'Numero_Conta', type: 'string' },
           { name: 'Banco_Conta', type: 'strinh' },
           { name: 'Tipo_Roupa', type: 'string' }
    ],


    /*
    Uncomment to add validation rules
    validators: {
        age: 'presence',
        name: { type: 'length', min: 2 },
        gender: { type: 'inclusion', list: ['Male', 'Female'] },
        username: [
            { type: 'exclusion', list: ['Admin', 'Operator'] },
            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
        ]
    }
    */

    /*
    Uncomment to add a rest proxy that syncs data with the back end.
    proxy: {
        type: 'rest',
        url : '/users'
    }
    */
});