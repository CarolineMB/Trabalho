Ext.define('LojaDeRoupas.control.DocumentoField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.documentofield',
    vtype: 'cpf',
    mask: '###.###.###-##',

    config: {
        tipoDocumento: 1
        /*
        1	PF	Pessoa-física
        2	PJ	Pessoa-jurídica
        */
    },

    initComponent: function () {
        var me = this;

        Ext.apply(Ext.form.field.VTypes, {
            cpf: function (strCPF) {
                var Soma,
                    Resto;
                Soma = 0;
                strCPF = strCPF.replace(/[\.-]/g, "");
                if (strCPF == "00000000000" ||
                    strCPF == "11111111111" ||
                    strCPF == "22222222222" ||
                    strCPF == "33333333333" ||
                    strCPF == "44444444444" ||
                    strCPF == "55555555555" ||
                    strCPF == "66666666666" ||
                    strCPF == "77777777777" ||
                    strCPF == "88888888888" ||
                    strCPF == "99999999999")
                    return false;

                for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
                Resto = (Soma * 10) % 11;

                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(strCPF.substring(9, 10))) return false;

                Soma = 0;
                for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
                Resto = (Soma * 10) % 11;

                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(strCPF.substring(10, 11))) return false;
                return true;
            },
            cpfText: 'CPF inválido'
        });

        Ext.apply(Ext.form.field.VTypes, {
            cnpj: function (cnpj) {
                if (cnpj == '') return false;

                cnpj = cnpj.replace(/[\.-]/g, "");
                cnpj = cnpj.replace('/', '');

                if (cnpj.length != 14)
                    return false;

                // Elimina CNPJs invalidos conhecidos
                if (cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999")
                    return false;

                // Valida DVs
                tamanho = cnpj.length - 2
                numeros = cnpj.substring(0, tamanho);
                digitos = cnpj.substring(tamanho);
                soma = 0;
                pos = tamanho - 7;
                for (i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2)
                        pos = 9;
                }
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                if (resultado != digitos.charAt(0))
                    return false;

                tamanho = tamanho + 1;
                numeros = cnpj.substring(0, tamanho);
                soma = 0;
                pos = tamanho - 7;
                for (i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2)
                        pos = 9;
                }
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                if (resultado != digitos.charAt(1))
                    return false;

                return true;
            },
            cnpjText: 'CNPJ inválido'
        });

        Ext.apply(me, {
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
                value = value.replace('/', '');
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

            oncpf: function (e) {
                me.formatMask(e.target, me.mask);
            },

            setTipoDocumento: function (tipoDocumento) {
                Ext.apply(me, {
                    tipoDocumento: tipoDocumento,
                    mask: (tipoDocumento == 1) ? '###.###.###-##' : '##.###.###\/####-##',
                    vtype: (tipoDocumento == 1) ? 'cpf' : 'cnpj'
                });
            }
        });
        me.callParent(arguments);
    },


    listeners: {
        afterrender: {
            fn: function (obj) {
                var me = this;

                obj.el.select('input').elements[0].addEventListener('input', me.oncpf);
                me.setTipoDocumento(me.tipoDocumento);

            }
        }
    }

});