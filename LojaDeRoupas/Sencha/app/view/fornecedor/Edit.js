Ext.define('LojaDeRoupas.view.fornecedor.Edit', {
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
                title: 'Alteracao de Cadastro de Fornecedores',
                cls: 'titulo',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },

                width: 1360,


                items: [{
                    xtype: 'displayfield',
                    value: 'Altere as informacoes necessarias e nao esqueca de salva-las',
                    layout: 'hbox',
                    width: 300,
                    cls: 'ajusta_texto'

                },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'ID',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'ID_Fornecedor',
                            width: 400,
                            id: 'pesqID',
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
                            name: 'Nome_Fornecedor',
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
                            name: 'Telefone1_Fornecedor',
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
                            name: 'Telefone2_Fornecedor',
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
                            name: 'Cidade_Fornecedor',
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
                            name: 'Rua_Fornecedor',
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
                            name: 'Num_End_Fornecedor',
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
                            name: 'Email_Fornecedor',
                            width: 400,
                            id: 'pesqEmail',
                            focusOnShow: true
                        }]

                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Numero da conta',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',


                        items: [{
                            xtype: 'textfield',
                            name: 'Numero_Conta',
                            width: 400,
                            id: 'pesqnumeroConta',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Nome do Banco',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',


                        items: [{
                            xtype: 'textfield',
                            name: 'Banco_Conta',
                            width: 400,
                            id: 'pesqnomeBanco',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Tipo de Roupa',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Tipo_Roupa',
                            width: 400,
                            id: 'pesqtipoRoupa',
                            focusOnShow: true
                        }]
                    },
                    {
                        cls: 'button_fornecedor_edit',
                        margin: 15,
                        items: [{
                            width: 145,
                            margin: 3,
                            xtype: 'button',
                            name: 'bt_salvar',
                            text: 'Salvar'
                        },
                            {
                                width: 145,
                                margin: 3,
                                xtype: 'button',
                                name: 'bt_cancelar',
                                text: 'Cancelar'
                            },
                            {
                                width: 145,
                                margin: 3,
                                xtype: 'button',
                                name: 'bt_excluir',
                                text: 'Exclui'
                            }
                        ]
                    },
                    {
                        xtype: 'image',
                        src: 'https://imagizer.imageshack.us/v2/476x225q90/923/XWHB40.jpg',
                        region: 'south',
                        height: 130,
                    }

                ]

            }]

        });

        me.callParent(arguments);
    }
});