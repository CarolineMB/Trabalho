Ext.define('LojaDeRoupas.view.funcionario.List', {
        extend: 'Ext.Container',
        alias: 'widget.funcionariolist',
        widget: 'funcionariolist',

        header: false,
        title: 'Funcionario',
        model: 'LojaDeRoupas.model.funcionario',
        buffered: true,

        requires: [
            'LojaDeRoupas.model.funcionario',
            //'WEDS.control.SearchBox'
        ],

        initComponent: function () {
            var me = this;

            Ext.apply(me, {
                sorters: { property: 'Nome_Funcionario' },
        
                views: {
                    'Create': 'fornecedorlist',
                    'Edit': 'fornecedorlist',
                    'View': 'fornecedorlist'
                },

                filterCnf: [
                    {
                        name: 'Nome_Funcionario',
                        eventName: 'select'
                    }
                ],

                dockedItems: [
                    {
                        xtype: 'toolbar',
                        padding: 4,
                        items: [
                            { text: 'Novo Funcionario', action: 'create' },
                            { text: 'Alterar Funcionario', action: 'edit' },
                            { text: 'Visualizar', action: 'view' },
                            { xtype: 'tbfill' },
                            { xtype: 'searchbox', name: 'Nome_Funcionario', width: 215, emptyText: 'Nome do Funcionario' }
                        ]
                    }
                ],

                columns: [
                    { header: 'ID do Funcionario', dataIndex: 'ID_Funcionario' },
                    { header: 'Nome do Funcionario', dataIndex: 'Nome_Funcionario', flex: 1 },
                    { header: 'Idade do Funcionario', dataIndex: 'Idade_Funcionario'},
                    { header: 'CPF do Funcionario', dataIndex: 'CPF_Funcionario'},
                    { header: 'Telefone 1 do Funcionario', dataIndex: 'Telefone1_Funcionario' },
                    { header: 'Telefone 2 do Funcionario', dataIndex: 'Telefone2_Funcionario' },
                    { header: 'Cidade do Funcionario', dataIndex: 'Cidade_Funcionario' },
                    { header: 'Rua do Funcionario', dataIndex: 'Rua_Funcionario' },
                    { header: 'Numero Casa/Apartamento do Funcionario', dataIndex: 'Num_End_Funcionario' },
                    { header: 'Email do Funcionario', dataIndex: 'Email_Funcionario' },
                    { header: 'Salario do Funcionario', dataIndex: 'Salario_Funcionario' },
                    { header: 'Nome do Banco do Funcionario', dataIndex: 'Banco_Funcionario' },
                    { header: 'Numero da Conta do Funcionario', dataIndex: 'Num_Conta_Funcionario' },
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