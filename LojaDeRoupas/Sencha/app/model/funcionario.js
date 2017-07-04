Ext.define('LojaDeRoupas.model.funcionario', {
    extend: 'Ext.data.Model',


    fields: [
            { name: 'ID_Funcionario', type: 'int' },
            { name: 'CPF_Funcionario', type: 'string'},
            { name: 'Nome_Funcionario', type: 'string'},
            { name: 'Telefone1_Funcionario', type: 'string'},
            { name: 'Telefone2_Funcionario', type: 'string'},
            { name: 'Cidade_Funcionario', type: 'string'},
            { name: 'Rua_Funcionario', type: 'string'},
            { name: 'Num_End_Funcionario', type: 'int'},
            { name: 'Email', type: 'string'},
            { name: 'Salario', type: 'float'}
        ],

        idProperty: 'id_funcionario',

       /* proxy: {
            type: 'easyrest',
            url: 'Service.svc/agenda',
            defaultDataUrl: 'Service.svc/agenda/default',
            validateUrl: 'Service.svc/agenda/validate',
            noCache: false,
            idParam: 'id_agenda',

            reader: {
                type: 'xml',
                record: 'agenda',
                root: 'agendas'
            },

            writer: {
                type: 'xml',
                record: 'agenda',
                defaultDocumentRoot: 'agendas',
                documentRoot: null
            }
        }
    });*/

    fields: [
        /*
        The fields for this model. This is an Array of Ext.data.field.Field definition objects or simply the field name.
        If just a name is given, the field type defaults to auto.  For example:

        { name: 'name',     type: 'string' },
        { name: 'age',      type: 'int' },
        { name: 'phone',    type: 'string' },
        { name: 'gender',   type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'alive',    type: 'boolean', defaultValue: true }
         */
    ]

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