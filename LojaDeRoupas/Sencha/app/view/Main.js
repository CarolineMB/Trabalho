Ext.define('LojaDeRoupas.view.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainView',

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
                width: 400,
                margin: 5,
                items: {
                    margin: 30,
                    xtype: 'displayfield',
                    value:'Nossa Loja tem como objetivo levar qualidade, beleza e conforto a todas as mulheres. Nao importa a sua idade ou o tipo do seu corpo, aqui temos tudo que voce precisa!',
                    cls: 'texto_base_1'               
                }
            },

                {
                    margin:5,
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [
                        {
                            title: 'BEM-VINDO A NOSSA PAGINA',
                            xtype: 'image',
                            src: 'https://imagizer.imageshack.us/v2/476x225q90/923/XWHB40.jpg',
                            region: 'lest'
                            
                        },
                        {
                            title: 'LOGIN FUNCIONARIO',

                            items:[
                            {
                                xtype: 'button',
                                name: 'bt_entrar',
                                text: 'Clique aqui para fazer login como funcionario',
                                action: 'tela_login',
                                listeners: {
                                    btnIconEl: {
                                        click: function () {
                                            alert('icon click!');
                                        }
                                    }
                                }
                            }]
                        },
                            {
                                title:'ACESSO A LOJA ONLINE',
                                xtype: 'button',
                                name: 'bt_conhecer_loja',
                                text: 'Clique aqui para visitar nossa loja',
                                cls: 'button_acesso_online',
                                action: 'acessar_loja'
                             },
                                                    
                    ]
                },
                
                {
                    xtype: 'image',
                    src: 'http://www.iodice.com.br/media/wysiwyg/2015_08_Lojas.jpg',
                    region: 'south',
                    height: 400,
                },

            ]
        });

        me.callParent(arguments);
    }
   
});