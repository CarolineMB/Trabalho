Ext.define('LojaDeRoupas.model.cliente', {
    extend: 'Ext.data.Model',

        fields: [
            { name: 'CPF_Cliente', type: 'string'},
            { name: 'Nome_Cliente', type: 'string'},
            { name: 'Telefone1_Cliente', type: 'string'},
            { name: 'Telefone2_Cliente', type: 'string'},
            { name: 'Cidade_Cliente', type: 'string'},
            { name: 'Rua_Cliente', type: 'string'},
            { name: 'Num_End_Cliente', type: 'string'},
            { name: 'Email_Cliente', type: 'string'}
        ],

        idProperty: 'id_cliente',

        /*proxy: {
            type: 'easyrest',
            url: 'Service.svc/agenda',
            defaultDataUrl: 'Service.svc/agenda/default',
            validateUrl: 'Service.svc/agenda/validate',
            noCache: false,
            idParam: 'id_cliente',

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