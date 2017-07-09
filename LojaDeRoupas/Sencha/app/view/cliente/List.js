Ext.define('LojaDeRoupas.view.cliente.List', {
    extend: 'Ext.Container',
    alias: 'widget.clientelist',
    widget: 'clientelist',

        header: false,
        title: 'Clientes',
        model: 'LojaDeRoupas.model.cliente',
        buffered: true,

        requires: [
            'LojaDeRoupas.model.cliente',
            //'WEDS.control.SearchBox'
        ],

        initComponent: function () {
            var me = this;

            Ext.apply(me, {
                sorters: { property: 'Nome_Cliente' },
        
                views: {
                    'Create': 'clientelist',
                    'Edit': 'clientelist',
                    'View': 'clientelist'
                },

                filterCnf: [
                    {
                        name: 'Nome_Cliente',
                        eventName: 'select'
                    }
                ],

                dockedItems: [
                    {
                        xtype: 'toolbar',
                        padding: 4,
                        items: [
                            { text: 'Novo Cliente', action: 'create' },
                            { text: 'Alterar cliente', action: 'edit' },
                            { text: 'Visualizar', action: 'view' },
                            { xtype: 'tbfill' },
                            { xtype: 'searchbox', name: 'Nome_Cliente', width: 215, emptyText: 'Nome do Cliente' }
                        ]
                    }
                ],

                columns: [
                    { header: 'CPF do Cliente', dataIndex: 'CPF_Cliente' },
                    { header: 'Nome do Cliente', dataIndex: 'Nome_Cliente', flex: 1 },
                    { header: 'Telefone 1 do Cliente', dataIndex: 'Telefone1_Cliente' },
                    { header: 'Telefone 2 do Cliente', dataIndex: 'Telefone2_Cliente' },
                    { header: 'Cidade do Cliente', dataIndex: 'Cidade_Cliente' },
                    { header: 'Rua do Cliente', dataIndex: 'Rua_Cliente' },
                    { header: 'Numero Casa/Apartamento do Cliente', dataIndex: 'Num_End_Cliente' },
                    { header: 'Email do Cliente', dataIndex: 'Email_Cliente' },
                    {
                        dataIndex: 'fl_ativo',
                        width: 30,
                        sortable: false,
                       /* renderer: function (value, metadata, record, rowIndex, colIndex, store) {
                            metadata.css = (metadata.css || '') + (value ? ' bullet-green ' : ' bullet-red ');
                            metadata.tdAttr = 'data-qtip="' + (record.get('tx_status')) + '"';
                            return '&nbsp;';
                        */
                    }
                ]
            });

            me.callParent(arguments);
        }
    });