Ext.define('LojaDeRoupas.view.Inicial', {
    extend: 'Ext.container.Container',
    alias: 'widget.inicialView',

    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'LojaDeRoupas.view.login.Login'
    ],

    xtype: 'app-main',
    bodyCls: 'form-input',

    layout: {
        type: 'border'
    },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [{
                region: 'west',
                xtype: 'panel',
                title: 'LOJA CAST MODA FEMININA',
                width: 450,
                margin: 5,
                items: {
                    height:700,
                    margin: 30,
                    xtype: 'displayfield',
                    value: 'Nossa Loja tem como objetivo levar qualidade, beleza e conforto a todas as mulheres. Nao importa a sua idade ou o tipo do seu corpo, aqui temos tudo que voce precisa!',
                    cls: 'texto_base_1'
                }
            },

                {
                    margin: 5,
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [{
                              title: 'Cadastros',
                              layout: {
                                  type: 'vbox',
                                  align: 'center',
                                  
                              },
                              margin: 30,
                              items: [{
                                  width: 140,
                                  margin: 7,
                                  xtype: 'button',
                                  name: 'bt_salvar',
                                  text: 'Funcionario'
                                 },
                                 {
                                      width: 140,
                                      margin: 7,
                                      xtype: 'button',
                                     //name: 'bt_cancelar',
                                      action:'create',
                                      text: 'Cliente'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Fornecedor'
                                 },
                                 {
                                      width: 140,
                                      margin: 7,
                                      xtype: 'button',
                                      name: 'bt_cancelar',
                                      text: 'Roupa'
                                 },
                              ]
                          },
                          {
                              title: 'Edicoes',
                              layout: {
                                  type: 'vbox',
                                  align: 'center',

                              },
                              margin: 30,
                              items: [{
                                  width: 140,
                                  margin: 7,
                                  xtype: 'button',
                                  name: 'bt_salvar',
                                  text: 'Funcionario'
                              },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Cliente'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Fornecedor'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Roupa'
                                 },
                              ]
                          },
                          {
                              title: 'Visualizacoes',
                              layout: {
                                  type: 'vbox',
                                  align: 'center',

                              },
                              margin: 30,
                              items: [{
                                  width: 140,
                                  margin: 7,
                                  xtype: 'button',
                                  name: 'bt_salvar',
                                  text: 'Funcionario'
                              },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Cliente'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Fornecedor'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Roupa'
                                 },
                              ]
                          },
                          ,
                          {
                              title: 'Listagens',
                              layout: {
                                  type: 'vbox',
                                  align: 'center',

                              },
                              margin: 30,
                              items: [{
                                  width: 140,
                                  margin: 7,
                                  xtype: 'button',
                                  name: 'bt_salvar',
                                  text: 'Funcionario'
                              },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Cliente'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Fornecedor'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Roupa'
                                 },
                              ]
                          },
                          {
                              title: 'Vendas',
                              layout: {
                                  type: 'vbox',
                                  align: 'center',

                              },
                              margin: 40,
                              items: [{
                                  width: 140,
                                  margin: 7,
                                  xtype: 'button',
                                  name: 'bt_salvar',
                                  text: 'Funcionario'
                              },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Cliente'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Roupa'
                                 },
                              ]
                          },
                          {
                              title: 'Estoques',
                              layout: {
                                  type: 'vbox',
                                  align: 'center',

                              },
                              margin: 50,
                              items: [
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Roupas em estoque'
                                 },
                                 {
                                     width: 140,
                                     margin: 7,
                                     xtype: 'button',
                                     name: 'bt_cancelar',
                                     text: 'Roupas vendidas'
                                 },
                              ]

                          },
                           
                    ]

                },
                {
                    xtype: 'image',
                    margin:'0 5 5 5',
                    src: 'http://www.iodice.com.br/media/wysiwyg/2015_08_Lojas.jpg',
                    mode:'image',
                    region: 'south',
                    height: 400,
                }

            ]
        });

        me.callParent(arguments);
    }

});