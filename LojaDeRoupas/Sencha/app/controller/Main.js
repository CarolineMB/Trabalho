Ext.define('LojaDeRoupas.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [
       'LojaDeRoupas.view.login.Login',
       'LojaDeRoupas.view.Main'
    ],

    views: [
        'login.Login',
        'Main'
    ],

    refs: [
            {
                ref: 'login.Login',
                selector: 'loginView',
                autoCreate: true,
                xtype: 'loginView'
            },
            {
                ref: 'Main',
                selector: 'mainView',
                autoCreate: true,
                xtype: 'mainView'
            },
            {
                ref: 'tela_login',
                selector: '#tela_login'
            }
      
    ],
        
   
    init: function () {
        config: {    
                control: {
                    'button[action=tela_login]': {
                        tap: 'pushViewFunction'
                    }
                }
        

            pushViewFunction: function() {
            Ext.Viewport.animateActiveItem({xtype: 'Eligibelity'}, {type:'slide', direction: 'left'});
        }
        }
    }
});
