Ext.define('LojaDeRoupas.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        //'LojaDeRoupas.view.Main'
        'LojaDeRoupas.view.cliente.List',
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
