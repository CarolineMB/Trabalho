Ext.define('LojaDeRoupas.control.DataField', {
    extend: 'Ext.form.field.Date',
    alias: 'widget.datafield',
    vtype: 'data',
    altFormats: '',




    initComponent: function () {
        var me = this;

        var fn = function(s) {
        var dateFormat = /^\d{1,4}[\.|\/|-]\d{1,2}[\.|\/|-]\d{1,4}$/;

        if (dateFormat.test(s)) {
            // remove any leading zeros from date values
            s = s.replace(/0*(\d*)/gi, "$1");
            var dateArray = s.split(/[\.|\/|-]/);

                // correct month value
                dateArray[1]= dateArray[1]-1;

                    // correct year value
                if (dateArray[2].length < 4) {
                    // correct year value
                dateArray[2]= (parseInt(dateArray[2]) < 50) ? 2000 +parseInt(dateArray[2]) : 1900 +parseInt(dateArray[2]);
                }

            var testDate = new Date(dateArray[2], dateArray[1], dateArray[0]);
            if (testDate.getDate() != dateArray[0]|| testDate.getMonth() != dateArray[1]|| testDate.getFullYear() != dateArray[2]) {
                return false;
        } else {
                return true;
                }
                } else {
                    return false;
                }

        };

Ext.apply(Ext.form.field.VTypes, {
                data: fn,
            //dataText: 'Data inválida, deve ser informado no formaro DD/MM/AAAA'
                dataText: ''
                });

        Ext.apply(me, {
            preencheValor: function () {
                var vlr = this.rawValue,
                    len = vlr.length,
                    cur = new Date(),
                    mes = (cur.getMonth() + 1).toString(),
                    ano = cur.getFullYear();

                if (vlr.length == 10) {
                    this.setRawValue(vlr);
                    me.validate();
                    me.fireEvent('select', me);
                    return;
                }
                if (mes.length < 2) mes = '0' + mes;

                if (len == 1) {
                    vlr = '0' + vlr + '/';
                    len = vlr.length;
                }
                if (len == 4) {
                    vlr = vlr.substring(0, 3) + '0' + vlr.substring(3, 4) + '/';
                    len = vlr.length;
                }

                // Concatena mes e ano
                if (len == 3) {
                    vlr = vlr + mes + '/' + ano;
                }

                if (len == 6) {
                    vlr = vlr + ano;
                }

                if (len == 8) {
                    vlr = vlr.substring(0, 6) + '20' + vlr.substring(6, len);
                    len = vlr.length;
                }

                this.setRawValue(vlr);
                me.fireEvent('select', me);
                me.validate();
            }
        });
        me.callParent(arguments);
    },


    listeners: {
        afterrender: {
            fn: function (obj) {
                var me = this, vl;

                me.on('change', function (obj, newValue, oldValue, eOpts) {
                    var vlr = this.rawValue,
                        len;

                    if (fn(vlr)) {
                        if (me.isValid()) {
                            //me.fireEvent('select', me, me.value);
                        }
                        return;
                    }

                    if (typeof vlr === 'string') {
                        vlr = vlr.replace('/', '');
                        vlr = vlr.replace('/', '');

                        if (vlr.length > 8) {
                            vlr = vlr.substring(0, 8);
                        }
                        len = vlr.length;

                        if ((vlr.length >= 2) && (!(vlr.substr(2, 1) == '/'))) {
                            vlr = vlr.substring(0, 2) + '/' + vlr.substring(2, (vlr.length + 1));
                        }

                        if ((vlr.length >= 5) && (!(vlr.substr(5, 1) == '/'))) {
                            vlr = vlr.substring(0, 5) + '/' + vlr.substring(5, (vlr.length + 1));
                        }

                    }
                    this.setRawValue(vlr);

                    if (me.isValid()) {
                        me.fireEvent('select', me, me.value);
                    }
                }, me);

                me.on('blur', function (obj, The, eOpts) {
                    me.preencheValor();
                }, me);

            }
        }
    }

});