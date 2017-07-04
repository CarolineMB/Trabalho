Ext.define('LojaDeRoupas.view.login.Login', {
    extend: 'Ext.container.Container',
    alias: 'widget.loginView',
    xtype: 'login',
    
    
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    bodyCls: 'form-input',

    layout: {
        type: 'border'
    },

    controller: 'login',
    bodyPadding: 100,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
    tems: [{
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                margin: 2,
                width: 1360,
                xtype: 'panel',
                border: false,
                title: 'Login Funcionario',

                items: [{
                        
                        border: false,
                        margin: 60,
                        xtype: 'form',
                        reference: 'form',
                        items: [
                           {
                                width: 350,
                                xtype: 'textfield',
                                name: 'username',
                                fieldLabel: 'Login',
                                allowBlank: false
                            },
                            {
                                width: 350,
                                xtype: 'textfield',
                                name: 'password',
                                inputType: 'password',
                                fieldLabel: 'Senha',
                                allowBlank: false
                            },
                            {
                                margin:45,
                                width:300,
                                xtype: 'button',
                                text: 'Login'
                      
                            }
                    ]
                }]
            },
            {
                    xtype: 'image',
                    src: 'http://1.bp.blogspot.com/-Fj-bnCgQNh8/VduLxJW0YyI/AAAAAAAACCg/DcOyCziQAaQ/s1600/magasin-stradivarius-paris-rivoli-2.jpg',
                    region: 'south',
                    height: 400,
                   
             }]
               
});

me.callParent(arguments);
}
});