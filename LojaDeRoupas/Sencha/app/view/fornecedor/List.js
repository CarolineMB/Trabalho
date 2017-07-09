Ext.define('LojaDeRoupas.view.fornecedor.List', {
        extend: 'Ext.Container',
        alias: 'widget.fornecedorlist',
        widget: 'fornecedorlist',

        header: false,
        title: 'Fornecedores',
        model: 'LojaDeRoupas.model.forncedor',
        buffered: true,

        requires: [
            'LojaDeRoupas.model.fornecedor',
            //'WEDS.control.SearchBox'
        ],

        initComponent: function () {
            var me = this;

            Ext.apply(me, {
                sorters: { property: 'Nome_Fornecedor' },
        
                views: {
                    'Create': 'fornecedorlist',
                    'Edit': 'fornecedorlist',
                    'View': 'fornecedorlist'
                },

                filterCnf: [
                    {
                        name: 'Nome_Fornecedor',
                        eventName: 'select'
                    }
                ],

                dockedItems: [
                    {
                        xtype: 'toolbar',
                        padding: 4,
                        items: [
                            { text: 'Novo Fornecedor', action: 'create' },
                            { text: 'Alterar Fornecedor', action: 'edit' },
                            { text: 'Visualizar', action: 'view' },
                            { xtype: 'tbfill' },
                            { xtype: 'searchbox', name: 'Nome_Fornecedor', width: 215, emptyText: 'Nome do Fornecedor' }
                        ]
                    }
                ],

                columns: [
                    { header: 'ID do Fornecedor', dataIndex: 'ID_Fornecedor' },
                    { header: 'Nome do Fornecedor', dataIndex: 'Nome_Fornecedor', flex: 1 },
                    { header: 'Telefone 1 do Cliente', dataIndex: 'Telefone1_Fornecedor' },
                    { header: 'Telefone 2 do Cliente', dataIndex: 'Telefone2_Fornecedor' },
                    { header: 'Cidade do Fornecedor', dataIndex: 'Cidade_Fornecedor' },
                    { header: 'Rua do Fornecedor', dataIndex: 'Rua_Fornecedor' },
                    { header: 'Numero Casa/Apartamento do Fornecedor', dataIndex: 'Num_End_Fornecedor' },
                    { header: 'Email do Fornecedor', dataIndex: 'Email_Fornecedor' },
                    { header: 'Nome do Banco do Fornecedor', dataIndex: 'Banco_Fornecedor' },
                    { header: 'Numero da Conta do Fornecedor', dataIndex: 'Num_Conta_Fornecedor' },
                    { header: 'Descricao da Roupa', dataIndex: 'Descricao_Roupa_Fornecedor' },
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