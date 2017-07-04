Ext.define('LojaDeRoupas.view.cliente.View', {
    extend: 'Ext.Container',

    xtype: 'app-main',
    bodyCls: 'form-input',
    minWidth: 560,
    minHeight: 540,

    layout: {
        type: 'border'
    },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [{
                align: 'center',
                xtype: 'panel',
                border: false,
                title: 'Cadastro de Fornecedores',
                cls: 'titulo',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },

                width: 1360,


                items: [{
                    xtype: 'displayfield',
                    value: 'Cadastre as Informacoes do fornecedor preenchendo os itens abaixo',
                    layout: 'hbox',
                    width: 300,
                    cls: 'ajusta_texto'

                },
                    {                       
                        width: 300,
                        xtype: 'displayfield',
                        name: 'CPF_Cliente',
                        fieldLabel: 'CPF',
                        value: 1,
                    },
                    {
                        width: 300,
                        xtype: 'displayfield',
                        name: 'Nome_Cliente',
                        fieldLabel: 'Nome',
                        layout: 'hbox',
                    },
                    {
                        width: 300,
                        xtype: 'displayfield',
                        name: 'Telefone1_Cliente',
                        fieldLabel: 'Telefone 1',
                        layout: 'hbox',
                    },
                    {
                        width: 300,
                        xtype: 'displayfield',
                        name: 'Telefone2_Cliente',
                        fieldLabel: 'Telefone 2',
                        layout: 'hbox',
                    },
                    {
                        width: 300,
                        xtype: 'displayfield',
                        name: 'Cidade_Cliente',
                        fieldLabel: 'Cidade',
                        layout: 'hbox',
                    },
                    {
                        width: 300,
                        xtype: 'displayfield',
                        name: 'Rua_Cliente',
                        fieldLabel: 'Rua',
                        layout: 'hbox',
                    },
                    {
                        width: 300,
                        xtype: 'displayfield',
                        name: 'tx_numeroEnd',
                        fieldLabel: 'Num_End_cliente',
                        layout: 'hbox',

                    },
                    {
                        width: 300,
                        xtype: 'displayfield',
                        name: 'Email_Cliente',
                        fieldLabel: 'Email',
                        layout: 'hbox',
                    },
                   
                    {
                        cls: 'button_cliente.view',
                        margin: 20,


                        items: [{
                            width: 140,
                            margin: 3,
                            xtype: 'button',
                            name: 'bt_sair',
                            text: 'Sair'
                        }
                        ]
                    },
                    {
                        xtype: 'image',
                        src: 'https://imagizer.imageshack.us/v2/476x225q90/923/XWHB40.jpg',
                        region: 'south',
                        height: 150,
                    }

                ]

            }]

        });

        me.callParent(arguments);
    }
});