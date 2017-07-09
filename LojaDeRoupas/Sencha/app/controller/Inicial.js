Ext.define('LojaDeRoupas.controller.Inicial', {
    extend: 'Ext.app.Controller',

    /*requires: [
         'WEDS.model.GoogleUrl'
    ],*/

    views: [
        'cliente.Create',
        'Inicial',
    ],

    refs: [{
        ref: 'clienteCreate',
        selector: 'inicialView'
    }],

    init: function () {
        var me = this;
        me.callParent();

        me.control({
            'inicialView button[action=create]': {
                click: me.doCreate
            },
        })
    },
    doCreate: function (grid, record) {
        var edit = Ext.create('LojaDeRoupas.view.cliente.Create').show();

        if (record) {
            edit.down('form').loadRecord(record);
            this.existe = 1;
        }
    }
});