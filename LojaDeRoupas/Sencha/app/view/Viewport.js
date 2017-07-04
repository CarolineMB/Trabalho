Ext.define('LojaDeRoupas.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        //'LojaDeRoupas.view.Main'
        'LojaDeRoupas.view.cliente.Create',      
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
