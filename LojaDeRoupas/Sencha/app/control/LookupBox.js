Ext.define('LojaDeRoupas.control.LookupBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.lookupbox',

       /* requires: [
            'LojaDeRoupas.Utils'
        ],*/

        config: {
            domain: '',
            filters: [],
            beforeLoad: null
        },

        allowBlank: true,
        autoSelect: false,
        forceSelection: false,
        typeAhead: true,

        valueField: 'id_chave',
        displayField: 'tx_valor',
        queryMode: 'local',

        initComponent: function () {
            var me = this;

            //
            // Registra os eventos para o filtro
            //

            Ext.Array.forEach(me.getFilters(), function (filter) {
                var cmp = Ext.getCmp(filter.name);
                if (cmp) {
                    if (cmp.events['select']) {
                        cmp.on('select', me.filterChanged, me);
                    } else {
                        cmp.on('change', me.filterChanged, me);
                    }
                }

            }, me);

            //
            // Carrega o domínio
            //

            me.load();
            me.callParent(arguments);

            //
            // Eventos
            //

            me.on({
                beforerender: function () {
                    var me = this;
                    me.afterLoad();
                    me.forceSelection = true;
                },

                specialkey: function (f, e) {
                    if (e.getKey() == e.ENTER) {
                        if (!me.getValue()) {
                            me.clearValue();
                            me.fireEvent('select', me, []);
                        }
                    }
                }
            });
        },

        beforeBlur: function () {
            var me = this,
                input = me.getEl().dom.querySelector('input');

            if ((input.value === '') && me.allowBlank) {
                me.clearValue();
                me.fireEvent('select', me, []);
            }

            me.callParent(arguments);
        },

        select: function (r) {
            var me = this;

            me.callParent(arguments);

            if (r && !r.isModel) {
                me.fireEvent('select', me, r);
            }
        },

        filterChanged: function () {
            var me = this,
                oldValue = me.getValue();

            if (me.store) {
                me.clearValue();
            }

            me.load();
            me.afterLoad(oldValue);
        },

        load: function () {
            var me = this,
                filters = me.getFilters(),
                paramsFilter = [],
                options = {};

            //
            // Filtro
            //

            Ext.Array.forEach(filters, function (filter) {
                var cmp = Ext.getCmp(filter.name),
                    value = cmp ? cmp.getValue() : filter.value;

                if (typeof value == 'function') value = value();

                if (value) {
                    paramsFilter.push({
                        'property': filter.lk_field || filter.name,
                        'value': value
                    });
                }
            }, me);

            if (me.beforeLoad) {
                me.beforeLoad(me, paramsFilter);
            }

            //
            // Domain store
            //

            options.params = options.params || {};
            options.params.nm = me.getDomain();

            if (paramsFilter.length > 0) {
                options.params.filter = Ext.encode(paramsFilter);
            }

            me.bindStore(WEDS.Utils.getDomainStore(options));
        },

        afterLoad: function (value) {

            //
            // Seleciona o primeiro registro se allowBlank for false
            //

            var me = this,
                value = value || me.getValue();

            if (!value && !me.allowBlank) {
                var first = me.store.first();
                if (first) {
                    value = first.get('id_chave');
                }
            }

            me.select(value);
        }
    });