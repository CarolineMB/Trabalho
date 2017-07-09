Ext.define('LojaDeRoupas.control.TelefoneField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.telefonefield',

    initComponent: function () {
        var me = this;

        Ext.apply(me, {


            isNumber: function (obj) {
                return !isNaN(parseFloat(obj))
            },

            formatMask: function (input, mask) {
                var i = 0,
			        j = 0,
			        k = 0,
			        inc = 0,
			        vlen = 0,
			        mlen = mask.length,
			        caret = me.getCaretPosition(input),
			        s = '',
			        value = input.value.trim(),

		        inc = caret >= value.length ? 1 : 0;

                //
                // Remove old mask
                //

                value = value.replace(/[\.-]/g, '');
                vlen = value.length;

                //
                // Format the string
                //

                while (mask === '#') {
                    k++;
                }

                while (i < mlen && j < vlen) {

                    if (k < mlen && mask[k] === value[j]) {

                        k++;
                        i = k;
                        s += value[j];
                        j++;

                        while (k < mlen && mask[k] === '#') {
                            k++;
                        }

                    } else {

                        if (mask[i] === '#') {
                            s += value[j];
                            j++;
                        } else {
                            s += mask[i];
                            caret += inc;
                        }

                        i++;
                    }
                }

                if (input.value != s) {
                    input.value = s;
                    me.setCaretPosition(input, caret);
                }
            },

            getCaretPosition: function (input) {
                var sel;

                //
                // IE Support
                //

                if (document.selection) {

                    input.focus();

                    //
                    // To get cursor position, get empty selection range
                    //

                    sel = document.selection.createRange();

                    //
                    // Move selection start to 0 position
                    //

                    sel.moveStart('character', -input.value.length);

                    //
                    // The caret position is selection length
                    //

                    return sel.text.length;
                }

                if (input.selectionStart || input.selectionStart == '0') {
                    return input.selectionStart;
                }

                return 0;
            },

            setCaretPosition: function (input, pos) {
                if (input.createTextRange) {
                    var range = input.createTextRange();
                    range.move('character', pos);
                    range.select();
                } else {
                    if (input.selectionStart) {
                        input.focus();
                        input.setSelectionRange(pos, pos);
                    } else {
                        input.focus();
                    }
                }
            },

            ontelefone: function (e) {
                e.target.value = e.target.value.replace(/[\.-]/g, '');
                var mask = '',
			        vlr = '';

                for (i = 0; i < e.target.value.length; i++) {
                    if (me.isNumber(e.target.value[i])) {
                        vlr += e.target.value[i];
                    }
                }
                e.target.value = vlr;

                switch (e.target.value.length) {
                    case 11:
                        mask = '(##)#####-####'
                        break;
                    case 10:
                        mask = '####-###-###'
                        break;
                    case 9:
                        mask = '#####-####'
                        break;
                    case 8:
                        mask = '####-####'
                        break;
                    default:
                        mask = '###-####'
                        break;
                }
                me.formatMask(e.target, mask);
            }
        });
        me.callParent(arguments);
    },

    listeners: {
        afterrender: {
            fn: function (obj) {
                var me = this;

                obj.el.select('input').elements[0].addEventListener('input', me.ontelefone);
                obj.el.select('input').elements[0].setAttribute('maxlength', 13);

            }
        }
    }

});