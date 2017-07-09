Ext.define('LojaDeRoupas.control.MenuButton', {
    extend: 'Ext.Button',
    alias: 'widget.menubutton',

        initComponent: function () {
            var me = this;

            if (Array.isArray(me.menu)) {
                me.menu = { items: me.menu };
            }

            me.menu.plain = true;
            me.arrowAlign = 'right';
            me.callParent(arguments);
        },

        onClick: function (e) {
            var me = this;

            me.doPreventDefault(e);

            // Can be triggered by ENTER or SPACE keydown events which set the button property.
            // Only veto event handling if it's a mouse event with an alternative button.

            if (e.type !== 'keydown' && e.button !== 0) {
                return;
            }

            if (!me.disabled) {
                me.maybeShowMenu();
            }
        }
    });