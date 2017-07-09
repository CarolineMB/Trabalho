Ext.define('LojaDeRoupas.view.roupa.List', {
    extend: 'Ext.Container',
        alias: 'widget.roupalist',
        widget: 'roupalist',

        header: false,
        title: 'Roupa',
        model: 'LojaDeRoupas.model.roupa',
        buffered: true,

        requires: [
            'LojaDeRoupas.model.roupa',
            //'WEDS.control.SearchBox'
        ],

        initComponent: function () {
            var me = this;

            Ext.apply(me, {
                sorters: { property: 'Codigo_Roupa' },
        
                views: {
                    'Create': 'roupalist',
                    'Edit': 'roupalist',
                    'View': 'roupalist'
                },

                filterCnf: [
                    {
                        name: 'Codigo_Roupa',
                        eventName: 'select'
                    }
                ],

                dockedItems: [
                    {
                        xtype: 'toolbar',
                        padding: 4,
                        items: [
                            { text: 'Cadastrar Nova Roupa', action: 'create' },
                            { text: 'Alterar Informacoes da Roupa', action: 'edit' },
                            { text: 'Visualizar', action: 'view' },
                            { xtype: 'tbfill' },
                            { xtype: 'searchbox', name: 'Codigo_Roupa', width: 215, emptyText: 'Codigo_Roupa' }
                        ]
                    }
                ],

                columns: [
                    { header: 'ID da Roupa', dataIndex: 'ID_Roupa' },
                    { header: 'ID do Fornecedor', dataIndex: 'ID_Fornecedor', flex: 1 },
                    { header: 'Codigo da Roupa', dataIndex: 'Codigo_Roupa'},
                    { header: 'Tamanho da Roupa', dataIndex: 'Tamanho_Roupa' },
                    { header: 'Descricao da Roupa', dataIndex: 'Descricao_Roupa' },
                    { header: 'Preco de Custo da Roupa', dataIndex: 'Preco_Custo_Roupa' },
                    { header: 'Preco de Venda da Roupa', dataIndex: 'Preco_Venda_Roupa' },
                    { header: 'Informacoes Adicionais', dataIndex: 'Informacoes_Adicionais' },
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