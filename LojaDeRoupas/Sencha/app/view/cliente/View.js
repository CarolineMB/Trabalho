Ext.define('LojaDeRoupas.view.cliente.View', {
    extend: 'Ext.Container',
    alias: 'widget.clienteview',
    id: 'clienteview',

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
                                title: 'Informações de Clientes',
                                cls: 'titulo',
                                layout: {
                                    type: 'vbox',
                                    align: 'center'
                                },
                                items: [{
                                    xtype: 'displayfield',
                                    value: 'Informações de Clientes',
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
                                            xtype: 'displayfield',
                                            name: 'CPF_Cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Nome',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'displayfield',
                                            name: 'Nome_Cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Telefone 1',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'displayfield',
                                            name: 'Telefone1_Cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Telefone 2',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'displayfield',
                                            name: 'Telefone2_Cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Cidade',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'displayfield',
                                            name: 'Cidade_Cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Rua',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'displayfield',
                                            name: 'Rua_Cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Numero Casa/Ap',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'displayfield',
                                            name: 'Num_End_Cliente'
                                        }]

                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Email',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'displayfield',
                                            name: 'Email_Cliente'
                                        }]

                                    },
                                    {
                                        cls: 'button_cliente_view',
                                        margin: 20,


                                        items: [{
                                            width: 140,
                                            margin: 3,
                                            xtype: 'button',
                                            name: 'bt_voltar',
                                            text: 'Voltar'
                                        }]
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