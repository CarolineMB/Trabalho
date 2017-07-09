Ext.define('LojaDeRoupas.view.roupa.Edit', {
    extend: 'Ext.Container',
    alias: 'widget.roupaedit',
    id: 'roupaedit',

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
                                title: 'Cadastrar Roupas',
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
                                         fieldLabel: 'ID Fornecedor',
                                         combineLabels: true,
                                         layout: 'hbox',

                                         items: [{
                                             xtype: 'numberfield',
                                             name: 'ID_Fornecedor',
                                             width: 400,
                                             emptyText: 'ID do Fornecedor'
                                         }]
                                     },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Codigo',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Codigo_Roupa',
                                            width: 400,
                                            emptyText: 'Codigo da Roupa'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Tamanho',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'numberfield',
                                            name: 'Tamanho_Roupa',
                                            width: 400,
                                            emptyText: 'Tamanho da Roupa'
                                        }]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        fieldLabel: 'Descricao',
                                        combineLabels: true,
                                        layout: 'hbox',

                                        items: [{
                                            xtype: 'textfield',
                                            name: 'Descricao_Roupa',
                                            width: 400,
                                            emptyText: 'Descricao da Roupa',
                                            height: 80
                                        }]
                                    },
                                     {
                                         xtype: 'fieldcontainer',
                                         fieldLabel: 'Valor de Custo',
                                         combineLabels: true,
                                         layout: 'hbox',

                                         items: [{
                                             xtype: 'numericfield',
                                             name: 'Preco_Custo_Roupa',
                                             width: 400,
                                             emptyText: 'Preco de Custo da Roupa'
                                         }]
                                     },
                                     {
                                         xtype: 'fieldcontainer',
                                         fieldLabel: 'Valor de Venda',
                                         combineLabels: true,
                                         layout: 'hbox',

                                         items: [{
                                             xtype: 'numericfield',
                                             name: 'Preco_Venda_Roupa',
                                             width: 400,
                                             emptyText: 'Preco de Venda da Roupa'
                                         }]
                                     },
                                      {
                                          xtype: 'fieldcontainer',
                                          fieldLabel: 'Informacoes Adicionais',
                                          combineLabels: true,
                                          layout: 'hbox',

                                          items: [{
                                              xtype: 'textfield',
                                              name: 'Informacoes_Adicionais',
                                              width: 400,
                                              emptyText: 'Informacoes Adiconais da Roupa',
                                              height: 80
                                          }]
                                      },
                                       {
                                           cls: 'button_roupa_create',
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