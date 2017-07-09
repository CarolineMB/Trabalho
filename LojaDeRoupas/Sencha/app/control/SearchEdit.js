  Ext.define('LojaDeRoupas.control.SearchEdit', {
        extend: 'Ext.form.field.ComboBox',
        alias: 'widget.searchedit',

        config: {
            model: '',
            field: ''
        },

        autoSelect: false,
        forceSelection: false,

        queryMode: 'remote',
        queryParam: false,

        typeAhead: false,
        triggerAction: 'query',
        hideTrigger: true,

        listConfig: {
            loadMask: null
        },

        initComponent: function () {
            var me = this;

            me.valueField = me.getField();
            me.displayField = me.getField();
            me.store = Ext.create('Ext.data.Store', { model: me.getModel(), remoteFilter: true, remoteSort: true, sorters: [{ property: me.getField(), direction: 'ASC'}] }),

            me.callParent(arguments);

            me.on({
                beforeQuery: function (queryPlan) {
                    var combo = queryPlan.combo,
                        value = combo.getRawValue() || '';

                    queryPlan.rawQuery = true;
                    queryPlan.forceAll = false;
                    queryPlan.cancel = value.length < combo.minChars;

                    combo.getStore().clearFilter(true);

                    if (!queryPlan.cancel) {
                        combo.getStore().filter([{ property: "vl_tab", value: 2 }, { property: combo.getField(), value: value}]);
                    } else {
                        me.store.loadData([]);
                    }

                    combo.lastQuery = null;
                },

                focus: function (cmp) {
                    cmp.store.loadData([]);
                },

                select: function (cmp) {
                    cmp.store.loadData([]);
                },

                blur: function (cmp) {
                    cmp.store.loadData([]);
                }
            });
        }
    });