Ext.define('LojaDeRoupas.view.funcionario.Edit', {
    extend: 'Ext.Container',

    xtype: 'app-main',
    bodyCls: 'form-input',
    minWidth: 560,
    minHeight: 540,

    layout: {
        type: 'border'
    },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [{
                align: 'center',
                xtype: 'panel',
                border: false,
                title: 'Alteracao de Cadastro de Funcionarios',
                cls: 'titulo',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },

                width: 1360,


                items: [{
                    xtype: 'displayfield',
                    value: 'Altere as informacoes necessarias e nao esqueca de salva-las, assim voce continuará fazendo parte da nossa equipe',
                    layout: 'hbox',
                    width: 300,
                    cls: 'ajusta_texto'

                },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'ID',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'ID_Funcionario',
                            width: 400,
                            id: 'pesqID',
                            focusOnShow: true
                        }]
                    },
                       {
                           xtype: 'fieldcontainer',
                           fieldLabel: 'CPF',
                           combineLabels: true,
                           labelConnector: 'e',
                           msgTarget: 'side',
                           layout: 'hbox',


                           items: [{
                               xtype: 'textfield',
                               name: 'CPF_Funcionario',
                               width: 400,
                               id: 'pesqCPF',
                               focusOnShow: true
                           }]
                       },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Nome',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Nome_Funcionario',
                            width: 400,
                            id: 'pesqNome',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Telefone 1',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Telefone1_Funcionario',
                            width: 400,
                            id: 'pesqTelefone1',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Telefone 2',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Telefone2_Funcionario',
                            width: 400,
                            id: 'pesqTelefone2',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Cidade',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Cidade_Funcionario',
                            width: 400,
                            id: 'pesqCidade',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Rua',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Rua_Funcionario',
                            width: 400,
                            id: 'pesqRua',
                            focusOnShow: true
                        }]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Numero Casa/Ap',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Num_End_Funcionario',
                            width: 400,
                            id: 'pesqNumero',
                            focusOnShow: true
                        }]

                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Email',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Email',
                            width: 400,
                            id: 'pesqEmail',
                            focusOnShow: true
                        }]

                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Salario',
                        combineLabels: true,
                        labelConnector: 'e',
                        msgTarget: 'side',
                        layout: 'hbox',

                        items: [{
                            xtype: 'textfield',
                            name: 'Salario',
                            width: 400,
                            id: 'pesqSalario',
                            focusOnShow: true
                        }]

                    },
                    {
                        cls: 'button_funcionario_edit',
                        margin: 20,


                        items: [{
                            width: 145,
                            margin: 3,
                            xtype: 'button',
                            name: 'bt_salvar',
                            text: 'Salvar'
                        },
                            {
                                width: 145,
                                margin: 3,
                                xtype: 'button',
                                name: 'bt_cancelar',
                                text: 'Cancelar'
                            },
                            {
                                width: 145,
                                margin: 3,
                                xtype: 'button',
                                name: 'bt_excluir',
                                text: 'Exclui'
                            }
                        ]
                    },
                    {
                        xtype: 'image',
                        src: 'https://imagizer.imageshack.us/v2/476x225q90/923/XWHB40.jpg',
                        region: 'south',
                        height: 200,
                    }

                ]

            }]

        });

        me.callParent(arguments);
    }
});