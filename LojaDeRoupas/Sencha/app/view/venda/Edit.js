/// <reference path="../Viewport.js" />
Ext.define('LojaDeRoupas.view.venda.Edit', {
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
                    title: 'Alteracao de Vendas',
                    cls: 'titulo',
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },

                    width: 1370,


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
                                name: 'ID_Venda',
                                width: 400,
                                id: 'pesqID',
                                focusOnShow: true
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: 'Data',
                            combineLabels: true,
                            labelConnector: 'e',
                            msgTarget: 'side',
                            layout: 'hbox',

                            items: [{
                                xtype: 'textfield',
                                name: 'data',
                                width: 400,
                                id: 'pesqData',
                                focusOnShow: true
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: 'ID do Funcionario',
                            combineLabels: true,
                            labelConnector: 'e',
                            msgTarget: 'side',
                            layout: 'hbox',

                            items: [{
                                xtype: 'textfield',
                                name: 'ID_Funcionario',
                                width: 400,
                                id: 'pesqidFuncionario',
                                focusOnShow: true
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: 'ID da Roupa',
                            combineLabels: true,
                            labelConnector: 'e',
                            msgTarget: 'side',
                            layout: 'hbox',

                            items: [{
                                xtype: 'textfield',
                                name: 'ID_Roupa',
                                width: 400,
                                id: 'pesqidRoupa',
                                focusOnShow: true
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            fieldLabel: 'CPF do Cliente',
                            combineLabels: true,
                            labelConnector: 'e',
                            msgTarget: 'side',
                            layout: 'hbox',

                            items: [{
                                xtype: 'textfield',
                                name: 'CPF_Cliente',
                                width: 400,
                                id: 'pesqcpfCliente',
                                focusOnShow: true
                            }]
                        },
                        {
                            cls: 'button_venda_edit',
                            margin: 20,


                            items: [{
                                width: 100,
                                margin: 3,
                                xtype: 'button',
                                name: 'bt_salvar',
                                text: 'Salvar'
                            },
                                {
                                    width: 100,
                                    margin: 3,
                                    xtype: 'button',
                                    name: 'bt_cancelar',
                                    text: 'Cancelar'
                                },
                                {
                                    width: 100,
                                    margin: 3,
                                    xtype: 'button',
                                    name: 'bt_excluir',
                                    text: 'Excluir'
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