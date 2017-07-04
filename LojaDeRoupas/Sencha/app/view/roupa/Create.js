Ext.define('LojaDeRoupas.view.roupa.Create', {
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
                title: 'Cadastro de Roupas',
                cls: 'titulo',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },

                width: 1370,


                items: [{
                    xtype: 'displayfield',
                    value: 'Cadastre as Informacoes das roupas preenchendo os itens abaixo',
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
                            name: 'ID_Roupa',
                            width: 400,
                            id: 'pesqID',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Tamanho',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Tamanho_Roupa',
                            width: 400,
                            id: 'pesqTamanho',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Tipo',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Tipo_Roupa',
                            width: 400,
                            id: 'pesqTipo',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Informacoes Adicionais',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Informacoes_Adicionais',
                            width: 400,
                            id: 'pesqinfoAdicionais',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'ID do fornecedor',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'ID_Fornecedor',
                            width: 400,
                            id: 'pesqidForecedor',
                            focusOnShow: true
                        }]
                    },
                    {
                        cls: 'button_roupa_create',
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
                        margin:130,
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