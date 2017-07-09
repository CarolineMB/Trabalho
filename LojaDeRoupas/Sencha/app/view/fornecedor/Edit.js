Ext.define('LojaDeRoupas.view.fornecedor.Edit', {
    extend: 'Ext.Container',
    alias: 'widget.fornecedoredit',
    id: 'fornecedoredit',

    requires: [
      'LojaDeRoupas.control.LookupBox',
      'LojaDeRoupas.control.DocumentoField',
      'LojaDeRoupas.control.TelefoneField',
      'LojaDeRoupas.control.DataField',
      'LojaDeRoupas.control.ContaField'
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
                                title: 'Editar Cadastro de Fornecedores',
                                cls: 'titulo',
                                layout: {
                                    type: 'vbox',
                                    align: 'center'
                                },
                                items: [{
                                    xtype: 'displayfield',
                                    value: 'Altere as informacoes necessarias e nao esqueca de salva-las',
                                    layout: 'hbox',
                                    width: 500,
                                    cls: 'ajusta_texto'

                                },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'ID',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'ID_Fornecedor',
                                            width: 400,
                                            emptyText: 'ID do fornecedor'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Nome',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Nome_Fornecedor',
                                            width: 400,
                                            emptyText: 'Nome do fornecedor'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Telefone 1',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'telefonefield',
                                            name: 'Telefone1_Fornecedor',
                                            width: 400,
                                            emptyText: 'Primeiro telefone do fornecedor'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Telefone 2',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'telefonefield',
                                            name: 'Telefone2_Fornecedor',
                                            width: 400,
                                            emptyText: 'Segundo telefone do fornecedor'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Cidade',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Cidade_Fornecedor',
                                            width: 400,
                                            emptyText: 'Cidade do fornecedor'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Rua',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Rua_Fornecedor',
                                            width: 400,
                                            emptyText: 'Rua do fornecedor'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Numero Casa/Ap',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Num_End_Fornecedor',
                                            width: 400,
                                            id: 'pesqNumero',
                                            focusOnShow: true,
                                            emptyText: 'Numero capa/apartamento do fornecedor'
                                        }]

                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Email',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Email_Fornecedor',
                                            width: 400,
                                            emptyText: 'Email do fornecedor'
                                        }]

                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Nome do Banco',
                                        combineLabels: true,
                                        layout: 'hbox',


                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Banco_Fornecedor',
                                            width: 400,
                                            emptyText: 'Nome do banco utilizado pelo fornecedor'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Numero da conta',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'contafield',
                                            name: 'Num_Conta_Fornecedor',
                                            width: 400,
                                            emptyText: 'Numero da conta utilizada pelo fornecedor'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Descricao da Roupa',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Descricao_Roupa_Fornecedor',
                                            width: 400,

                                            emptyText: 'Descricao da roupa vendida fornecedor',
                                            height: 70
                                        }]
                                    },
                                    {
                                        cls: 'button_fornecedor_edit',
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
                                            {
                                                width: 140,
                                                margin: 3,
                                                xtype: 'button',
                                                name: 'bt_excluir',
                                                text: 'Excluir'
                                            },
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
                        }]
                    }
                ]

            }]

        });

        me.callParent(arguments);
    }
});