Ext.define('LojaDeRoupas.control.NumericField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.numericfield',
    maskDefault: '########,##',
   
        initComponent: function () {
            var me = this;

            Ext.apply(me, {

                isNumber: function (obj) {
                    return !isNaN(parseFloat(obj))
                },

                formatParcial: function (tamanho, vlr) {
                    var sValor = '';
                    for (i = 0; i < tamanho; i++) {
                        var vl = vlr[i];
                        if (!vl) break;
                        if (me.isNumber(vl)) {
                            sValor += vl;
                        }
                    }
                    return sValor;
                },

                formatMask: function (mask, value) {
                    var hasDec = (mask.indexOf(',') >= 0),
                        value = value.trim(),
                        sValue = '',
                        maskLen = mask.length;

                    if (hasDec) {

                        var posMask = mask.indexOf(','),
                            valueDec = value.indexOf(','),
                            vl, idx;

                        if (valueDec >= 0) {
                            vl = value.substring(0, valueDec);
                            sValue = me.formatParcial(posMask, vl);

                            idx = valueDec + 1;
                            vl = value.substring(idx, value.length);
                            posMask = mask.length - (posMask + 1);

                            sValue += ',' + me.formatParcial(posMask, vl);
                        } else {
                            var j = 0;
                            for (i = 0; i < mask.length; i++) {
                                var vl = value[j];
                                if (!vl) break;
                                if ((mask[i] == '#') && me.isNumber(vl)) {
                                    sValue += vl;
                                    j++;
                                } else if (mask[i] == ',') {
                                    sValue += ',';
                                }
                            }

                        }

                    } else {
                        for (i = 0; i < maskLen; i++) {
                            var vl = value[i];
                            if (!vl) break;
                            if ((mask[i] == '#') && me.isNumber(vl)) {
                                sValue += vl;
                            }
                        }
                    }

                    return sValue;
                },

                fillMask: function (mask, value) {
                    var idx = value.indexOf(','),
                        lenDec = mask.length - (mask.indexOf(',') + 1);

                    if (value == '') {
                        return '0,00';
                    }

                    if (idx == 0) {
                        value = '0' + value;
                        idx++;
                    }
                    if (idx > 0) {
                        lenDec = lenDec - (value.length - (idx + 1));
                    } else {
                        value += ',';
                    }

                    while (lenDec > 0) {
                        value += '0';
                        lenDec--;
                    }
                    return value;
                },

                getValue: function () {
                    if (me.rawValue) {
                        if (typeof me.rawValue == 'string')
                            return me.rawValue.replace(',', '.');
                        else
                            return me.rawValue;
                    }
                    else
                        return "0";
                },

                setValue: function (value) {
                    if (value != undefined) {
                        if (me.cmp) {
                            me.cmp.value = me.fillMask(me.maskDefault, value.toString().replace('.', ','));
                        }
                        me.value = value.toString().replace('.', ',');
                        me.rawValue = me.value;
                    }
                },

                onnum: function (e) {
                    e.target.value = me.formatMask(me.maskDefault, e.target.value);
                },

                onblur: function (e) {
                    e.target.value = me.fillMask(me.maskDefault, e.target.value);
                }

            });
            me.callParent(arguments);
        },


        listeners: {
            afterrender: {
                fn: function (obj) {
                    var me = this,
                        cmp = obj.el.select('input').elements[0];
                    me.cmp = cmp;
                    cmp.addEventListener('input', me.onnum);
                    cmp.addEventListener('blur', me.onblur);

                    if (me.value)
                        cmp.value = me.fillMask(me.maskDefault, me.value);
                }
            }
        }

    });