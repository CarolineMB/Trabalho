Ext.define('LojaDeRoupas.view.venda.Edit', {
    extend: 'Ext.Container',
    alias: 'widget.vendaedit',
    id: 'vendaedit',

    requires: [
      'LojaDeRoupas.control.LookupBox',
      'LojaDeRoupas.control.DocumentoField',
      'LojaDeRoupas.control.TelefoneField',
      'LojaDeRoupas.control.DataField',
      'LojaDeRoupas.control.ContaField',
      'LojaDeRoupas.control.NumericField'
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
                                title: 'Editar Vendas',
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
                                     fieldLabel: 'ID Venda',
                                     combineLabels: true,
                                     layout: 'hbox',

                                     items: [{
                                         xtype: 'numberfield',
                                         name: 'ID_Venda',
                                         width: 400,
                                         emptyText: 'ID da Venda'
                                     }]
                                 },
                                     {
                                         xtype: 'fieldcontainer',
                                         fieldLabel: 'ID Roupa',
                                         combineLabels: true,
                                         layout: 'hbox',

                                         items: [{
                                             xtype: 'numberfield',
                                             name: 'ID_Roupa',
                                             width: 400,
                                             emptyText: 'ID da Roupa'
                                         }]
                                     },
                                     {
                                         xtype: 'fieldcontainer',
                                         fieldLabel: 'ID Funcionario',
                                         combineLabels: true,
                                         layout: 'hbox',

                                         items: [{
                                             xtype: 'numberfield',
                                             name: 'ID_Funcionario',
                                             width: 400,
                                             emptyText: 'ID do Funcionario'
                                         }]
                                     },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'CPF Cliente',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'documentofield',
                                            name: 'CPF_Cliente',
                                            width: 400,
                                            emptyText: 'CPF do Cliente'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Data',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'datafield',
                                            name: 'Data_Venda',
                                            width: 400,
                                            emptyText: 'Data da Venda'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Quantidade Roupa',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Quantidade_Roupa',
                                            width: 400,
                                            emptyText: 'Quantidade de Roupa',
                                        }]
                                    },
                                     {
                                         xtype: 'fieldcontainer',
                                         fieldLabel: 'Valor de Venda',
                                         combineLabels: true,
                                         layout: 'hbox',

                                         items: [{
                                             xtype: 'numericfield',
                                             name: 'Valor_Venda',
                                             width: 400,
                                             emptyText: 'Preco de Venda da Roupa'
                                         }]
                                     },
                                       {
                                           cls: 'button_venda_edit',
                                           margin: '20 0 20 40',


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
                                           }]
                                       },
                                        {
                                            xtype: 'image',
                                            src: 'https://imagizer.imageshack.us/v2/476x225q90/923/XWHB40.jpg',
                                            region: 'south',
                                            height: 130,
                                        }
                                ]
                            },

                            ]
                        }]
                    }]
            }]



        });

        me.callParent(arguments);
    }
});