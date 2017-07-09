Ext.define('LojaDeRoupas.model.venda', {
    extend: 'Ext.data.Model',

    fields: [
           { name: 'ID_Venda', type: 'int' },
           { name: 'ID_Roupa', type: 'int' },
           { name: 'ID_Funcionario', type: 'int' },
           { name: 'CPF_Cliente', type: 'string' },
           { name: 'Data_Venda', type: 'date', dateFormat: 'Y-m-d\\TH:i:s' },
           { name: 'Quantidade_Roupa', type: 'int' },
           { name: 'Valor_Venda', type: 'float' }
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