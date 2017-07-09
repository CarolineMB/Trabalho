Ext.define('LojaDeRoupas.control.MenuBox', {
    extend:'Ext.form.field.Trigger',
    alias: 'widget.menubox',

        config: {
            title: null,
            menu: '',
            filterCnf: [],
            idField: '',
            displayField: '',
            loadCallback: null
        },

        initComponent: function () {
            var me = this;

            me.optional = me.allowBlank;
            me.allowBlank = true;

            if (me.optional) {
                Ext.apply(me, {
                    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                    trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger'
                });
            } else {
                Ext.apply(me, {
                    trigger1Cls: Ext.baseCSSPrefix + 'form-search-trigger'
                });
            }

            me.view = null;
            me.addEvents('select');
            me.callParent(arguments);

            //
            // Eventos
            //

            me.on({
                specialKey: function (f, e) {
                    if (e.getKey() == e.ENTER)
                        me.showMenu();
                },

                focus: function () {
                    me.oldRawValue = me.getRawValue()
                },

                blur: function () {
                    if (!me.view) {
                        if (me.getRawValue() != me.oldRawValue) {
                            if (me.getRawValue()) {
                                me.showMenu()
                            } else {
                                if (me.optional) {
                                    me.onTrigger1Click();
                                } else {
                                    me.setRawValue(me.oldRawValue);
                                }
                            }
                        }
                    }
                }
            });
        },

        afterRender: function () {
            var me = this;

            me.callParent();

            if (!me.getValue())
                me.triggerCell.item(0).setDisplayed(false);
        },

        onTrigger1Click: function () {
            var me = this;

            if (me.optional) {
                var cell = me.triggerCell.item(0);

                if (cell.isDisplayed()) {
                    me.setValue('');
                    cell.setDisplayed(false);
                    me.updateLayout();

                    me.fireEvent('select', me, '');
                }
            } else {
                me.showMenu();
            }
        },

        onTrigger2Click: function () {
            this.showMenu();
        },

        //
        // Exibe o menu 
        //

        showMenu: function () {
            var me = this;

            me.view = Ext.widget(me.menu, {
                filter: me.getRawValue(),
                filterCnf: me.getFilterCnf()
            });

            Ext.apply(me.view, {
                title: me.title || me.view.title
            });

            //
            // Eventos
            //

            me.view.down('button[action=cancel]').on('click', function () {
                me.setRawValue(me.oldRawValue);

                me.view.close();
                me.view = null;

                me.focus(true);
                me.loadCallback = null;
            }, me);

            me.view.down('button[action=ok]').on('click', function () {
                var values = me.view.getValues();

                me.id_record = values.value;
                me.setRawValue(values.displayValue);
                me.oldRawValue = me.getRawValue();

                me.view.close();
                me.view = null;

                me.triggerCell.item(0).setDisplayed(true);
                me.updateLayout();

                me.focus(true);
                me.fireEvent('select', me, me.id_record);

                if (me.loadCallback) {
                    me.loadCallback();
                    me.loadCallback = null;
                }

            }, me);

            //
            // Exibe o menu
            //

            me.view.modal = true;
            me.view.show();

            // Ajusta foco
            var obj = me.view.down('[focusOnShow=true]');
            if (obj) {
                obj.focus();

                var store = me.view.down('grid').store,
                    b = true;

                store.on('load', function () {
                    if (b) {
                        obj.focus();
                    }
                    b = false;
                });
            }
        },

        setValue: function (value, silent) {
            var me = this;

            if (value) {
                if (typeof (value) === 'object') {
                    me.id_record = value[me.getIdField()];
                    value = value[me.getDisplayField()];
                } else {
                    me.id_record = value;
                    value = me.up('form').getRecord().get(me.getDisplayField());
                }
                //me.oldRawValue = value
            } else {
                me.id_record = null;
                //me.oldRawValue = value;
            }

            me.setRawValue(value);
            me.oldRawValue = value;

            me.callParent(arguments);

            if (me.triggerCell)
                me.triggerCell.item(0).setDisplayed(true);

            me.updateLayout();

            if (!silent)
                me.fireEvent('select', me, me.id_record);
        },

        getValue: function () {
            return this.id_record;
        }
    });