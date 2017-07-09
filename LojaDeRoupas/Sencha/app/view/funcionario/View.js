Ext.define('LojaDeRoupas.view.funcionario.View', {
        extend: 'Ext.Container',
        alias: 'widget.funcionarioview',
        id: 'funcionarioview',

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
                                    title: 'Visualizar Funcionario',
                                    cls: 'titulo',
                                    layout: {
                                        type: 'vbox',
                                        align: 'center'
                                    },
                                    items: [{
                                        xtype: 'displayfield',
                                        value: 'Visualizar Funcionario',
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
                                                xtype: 'numberfield',
                                                name: 'ID_Funcionario',
                                                width: 400,
                                                emptyText: 'ID do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Nome',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'textfield',
                                                name: 'Nome_Funcionario',
                                                width: 400,
                                                emptyText: 'Nome do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Idade',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'numberfield',
                                                name: 'Idade_Funcionario',
                                                width: 400,
                                                emptyText: 'Idade do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'CPF',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'documentofield',
                                                name: 'CPF_Funcionario',
                                                width: 400,
                                                emptyText: 'CPF do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Telefone 1',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'telefonefield',
                                                name: 'Telefone1_Funcionario',
                                                width: 400,
                                                emptyText: 'Primeiro telefone do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Telefone 2',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'telefonefield',
                                                name: 'Telefone2_Funcionario',
                                                width: 400,
                                                emptyText: 'Segundo telefone do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Cidade',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'textfield',
                                                name: 'Cidade_Funcionario',
                                                width: 400,
                                                emptyText: 'Cidade do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Rua',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'textfield',
                                                name: 'Rua_Funcionario',
                                                width: 400,
                                                emptyText: 'Rua do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Numero Casa/Ap',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'textfield',
                                                name: 'Num_End_Funcionario',
                                                width: 400,
                                                emptyText: 'Numero capa/ap do funcionario'
                                            }]

                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Email',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'textfield',
                                                name: 'Email_Funcionario',
                                                width: 400,
                                                emptyText: 'Email do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Salario',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'numericfield',
                                                name: 'Salario_Funcionario',
                                                width: 400,
                                                emptyText: 'Salario do funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Nome do Banco',
                                            combineLabels: true,
                                            layout: 'hbox',


                                            items: [{
                                                xtype: 'textfield',
                                                name: 'Banco_Funcionario',
                                                width: 400,
                                                emptyText: 'Nome do banco utilizado pelo funcionario'
                                            }]
                                        },
                                        {
                                            xtype: 'fieldcontainer',
                                            fieldLabel: 'Numero da conta',
                                            combineLabels: true,
                                            layout: 'hbox',

                                            items: [{
                                                xtype: 'contafield',
                                                name: 'Num_Conta_Funcionario',
                                                width: 400,
                                                emptyText: 'Numero da conta utilizada pelo funcionario'
                                            }]
                                        },
                                        {
                                            cls: 'button_funcionario_view',
                                            margin: 20,


                                            items: [{
                                                width: 140,
                                                margin: 3,
                                                xtype: 'button',
                                                name: 'bt_salvar',
                                                text: 'Salvar'
                                            }]
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