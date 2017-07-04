Ext.define('LojaDeRoupas.view.cliente.Create', {
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
                title: 'Cadastro de Clientes',
                cls: 'titulo',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },

                width: 1360,


                items: [{
                    xtype: 'displayfield',
                    value: 'Se voce ainda nao eh um cliente Cast e deseja se cadastrar na nossa loja, entre com seus dados nos campos abaixo e receba nossas novidades por email.',
                    layout: 'hbox',
                    width: 300,
                    cls: 'ajusta_texto'

                },

                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'CPF',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',


                        items: [{
                            xtype: 'textfield',
                            name: 'CPF_Cliente',
                            width: 400,
                            id: 'pesqCPF',
                            focusOnShow: true
                        }]
                    },

                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Nome',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Nome_Cliente',
                            width: 400,
                            id: 'pesqNome',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Telefone 1',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Telefone1_Cliente',
                            width: 400,
                            id: 'pesqTelefone1',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Telefone 2',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Telefone2_Cliente',
                            width: 400,
                            id: 'pesqTelefone2',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Cidade',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Cidade_Cliente',
                            width: 400,
                            id: 'pesqCidade',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Rua',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Rua_Cliente',
                            width: 400,
                            id: 'pesqRua',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Numero Casa/Ap',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Num_End_cliente',
                            width: 400,
                            id: 'pesqNumero',
                            focusOnShow: true
                        }]

                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Email',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Email_Cliente',
                            width: 400,
                            id: 'pesqEmail',
                            focusOnShow: true
                        }]

                    },
                    {
                        cls: 'button_cliente_create',
                        margin: 15,

                        items: [{
                            width: 140,
                            margin: 3,
                            xtype: 'button',
                            name: 'bt_esqueci_senha',
                            text: 'Salvar',
                            action: 'salvar'
                        },
                            {
                                width: 140,
                                margin: 3,
                                xtype: 'button',
                                name: 'bt_entrar',
                                text: 'Cancelar',
                                action: 'deletar'
                            }
                        ]
                    },
                    {
                        margin: 30,
                        xtype: 'image',
                        src: 'https://imagizer.imageshack.us/v2/476x225q90/923/XWHB40.jpg',
                        region: 'south',
                        height: 200,
                    }

                ]

            }]

        });

        me.callParent(arguments);
    }
});