Ext.define('LojaDeRoupas.view.cliente.Create', {
    extend: 'Ext.Container',
    alias: 'widget.clientecreate',
    id: 'clientecreate',

    requires: [
        'LojaDeRoupas.control.LookupBox',
        'LojaDeRoupas.control.DocumentoField',
        'LojaDeRoupas.control.TelefoneField',
        'LojaDeRoupas.control.DataField'
    ],


    xtype: 'app-main',
    bodyCls: 'form-input',
    minWidth: 575,
    minHeight: 365,

    initComponent: function () {
        var me = this;


        Ext.apply(me, {
            items: [{
                xtype: 'form',
                border: false,
                layout: 'card',

                fieldDefaults: {
                    hideEmptyLabel: false,
                    labelAlign: 'right',
                    labelWidth: 145,
                    width: 600
                },

                items: [

                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        anchor: '100%',
                        border: false,

                        items: [{
                            xtype: 'panel',
                            layout: 'anchor',
                            border: false,
                            padding: '0 8 0 0',
                            flex: 1,
                            items: [{
                                align: 'center',
                                xtype: 'form',
                                border: false,
                                title: 'Cadastro de Clientes',
                                cls: 'titulo',
                                layout: {
                                    type: 'vbox',
                                    align: 'center'
                                },
                                items: [{
                                    xtype: 'displayfield',
                                    value: 'Cadastre as Informacoes do cliente preenchendo os itens abaixo',
                                    layout: 'hbox',
                                    width: 500,
                                    cls: 'ajusta_texto'

                                },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'CPF',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'documentofield',
                                            name: 'CPF_Cliente',
                                            width: 400,
                                            tipoDocumento: 1,
                                            emptyText: 'CPF do cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Nome',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Nome_Cliente',
                                            width: 400,
                                            emptyText: 'Nome do cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Telefone 1',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'telefonefield',
                                            name: 'Telefone1_Cliente',
                                            width: 400,
                                            emptyText: 'Primeiro telefone do cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Telefone 2',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'telefonefield',
                                            name: 'Telefone2_Cliente',
                                            width: 400,
                                            emptyText: 'Segundo telefone do cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Cidade',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Cidade_Cliente',
                                            width: 400,
                                            emptyText: 'Cidade do cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Rua',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Rua_Cliente',
                                            width: 400,
                                            emptyText: 'Rua do cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Numero Casa/Ap',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Num_End_Cliente',
                                            width: 400,
                                            emptyText: 'Numero casa/ap do cliente'
                                        }]

                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Email',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Email_Cliente',
                                            width: 400,
                                            emptyText: 'Email do cliente'
                                        }]

                                    },
                                    {
                                        cls: 'button_cliente_create',
                                        margin: 20,


                                        items: [{
                                            width: 140,
                                            margin: 3,
                                            xtype: 'button',
                                            name: 'bt_salvar',
                                            text: 'Salvar'
                                        },
                                            {
                                                width: 140,
                                                margin: 3,
                                                xtype: 'button',
                                                name: 'bt_cancelar',
                                                text: 'Cancelar'
                                            },
                                        ]
                                    },
                                    {
                                        xtype: 'image',
                                        src: 'https://imagizer.imageshack.us/v2/476x225q90/923/XWHB40.jpg',
                                        region: 'south',
                                        height: 180,
                                    }

                                ]

                            }]
                        }]
                    }
                ]
            }]

        });

        me.callParent(arguments);
    }
});