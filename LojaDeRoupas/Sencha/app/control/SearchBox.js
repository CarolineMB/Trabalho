Ext.define('LojaDeRoupas.control.SearchBox', {
        extend: 'Ext.form.field.Trigger',
        alias: 'widget.searchbox',

        trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
        trigger2Cls: Ext.baseCSSPrefix + 'form-filter-trigger',
        emptyText: 'Pesquisar texto',

        initComponent: function () {
            var me = this;

            me.addEvents('select');
            me.callParent(arguments);

            //
            // Eventos
            //

            me.on({
                specialkey: function (f, e) {
                    if (e.getKey() == e.ENTER)
                        me.onTrigger2Click();
                },

                blur: function () {
                    if (me.getValue())
                        me.onTrigger2Click()
                    else
                        me.onTrigger1Click();
                }
            });
        },

        afterRender: function () {
            var me = this;

            me.callParent();

            if (!me.getValue())
                me.triggerCell.item(0).setDisplayed(false);
        },

        //
        // Remove o filtro atual
        //

        onTrigger1Click: function () {
            var me = this,
                cell = me.triggerCell.item(0);

            if (cell.isDisplayed()) {
                me.setValue('');
                cell.setDisplayed(false);
                me.updateLayout();

                me.fireEvent('select', me, null);
            }
        },

        //
        // Novo filtro
        //

        onTrigger2Click: function () {
            var me = this,
                value = me.getValue();

            if (value.length > 0) {
                me.triggerCell.item(0).setDisplayed(true);
                me.updateLayout();
                me.fireEvent('select', me, value);
            }
            else
                me.onTrigger1Click();
        }
    });