Ext.define('LojaDeRoupas.model.roupa', {
    extend: 'Ext.data.Model',

    fields: [
           { name: 'ID_Roupa', type: 'int' },
           { name: 'ID_Fornecedor', type: 'int' },
           { name: 'Codigo_Roupa', type: 'string' },
           { name: 'Tamanho_Roupa', type: 'string' },
           { name: 'Descricao_Roupa', type: 'string' },
           { name: 'Preco_Custo_Roupa', type: 'float' },
           { name: 'Preco_Venda_Roupa', type: 'float' },
           { name: 'Informacoes_Adicionais', type: 'string' }            
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