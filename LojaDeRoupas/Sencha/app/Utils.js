Ext.define('LojaDeRoupas.Utils', {
      statics: {

            getDomainStore: function (options) {

                if (!WEDS.Environment.getUsuarioAtivo().id_sessao)
                    return;

                //
                // Nome do domínio
                //

                var domain = options;

                if (typeof domain === "string") {
                    options = { params: { nm: domain} };
                } else {
                    domain = options.params.nm;
                }

                //
                // Store
                //

                var store = Ext.data.StoreManager.lookup(domain);
                if ((store) && (options) && (options.params) && (!options.params.filter) && (!options.params.noCache)) {
                    return store;
                }


                store = Ext.create('Ext.data.Store', {
                    storeId: domain,
                    autoLoad: false,

                    fields: [
                                { name: 'id_chave', type: 'int' },
                                { name: 'tx_valor', type: 'string' },
                                { name: 'tx_descricao', type: 'string' }
                    ],

                    idProperty: 'id_chave',

                    proxy: {
                        type: 'memory',
                        reader: {
                            type: 'xml',
                            record: 'registro',
                            root: 'registros'
                        }
                    }
                });

                Ext.apply(options, {
                    url: 'Service.svc/dominio',
                    method: 'GET',
                    async: false,
                    disableCaching: false,
                    headers: { 'extension-pragma': 'token=' + WEDS.Environment.getUsuarioAtivo().id_sessao },

                    success: function (response) {
                        var xml = response.responseXML;
                        if (xml) {
                            store.loadRawData(xml, false);
                        } else {
                            store.removeAll();
                        }
                    }
                });

                //
                // Carrega os registros do domínio
                //

                Ext.Ajax.request(options);
                return store;
            },

            locateTree: function (theTree, newRecord) {
                var me = this,
                    record = theTree.getRootNode();

                record.removeAll(false);
                record.set('leaf', false);
                record.fireEvent('expand', record);
                record.expand();

                setTimeout(function () {
                    record = record.findChild(theTree.pk_fieldRefresh, newRecord.getId());
                    theTree.getSelectionModel().select(record)

                    record.removeAll(false);
                    record.set('leaf', false);
                    record.fireEvent('expand', record);

                    setTimeout(function () {
                        record.expand();
                    }, 500);

                }, 500);


            },

            dominioDestroy: function (nome) {
                var tmp = Ext.data.StoreManager.lookup(nome);
                if (tmp) {
                    Ext.data.StoreManager.unregister(tmp);
                }
            },

            loadSyncStore: function (model, extraParams, urlGet, urlPk) {
                var store,
                    url = (urlGet || model.getProxy().url),
                    urlParam = '';

                if (extraParams)
                    urlParam = '?' + extraParams;
                else if (urlPk)
                    urlParam = '/' + urlPk;

                //
                // Carrega os registros do domínio
                //

                Ext.Ajax.request({
                    url: url + urlParam,
                    async: false,
                    disableCaching: false,
                    headers: { 'extension-pragma': 'token=' + WEDS.Environment.getUsuarioAtivo().id_sessao },

                    success: function (response) {
                        var xml = response.responseXML;
                        if (xml) {
                            store = Ext.create('Ext.data.Store', {
                                model: model,
                                autoLoad: false
                            });

                            store.loadRawData(xml, false);
                        }
                    }
                });

                return store;
            },

            loadStore: function (model, id, options, error) {
                var store;

                options = options || {};

                //
                // Default options
                //

                options.method = options.method || ((options.xmlData || options.jsonData) ? 'POST' : 'GET');
                options.url = options.url || model.getProxy().url;
                options.async = options.async || false;
                options.disableCaching = options.disableCaching || false;
                options.headers = { 'extension-pragma': 'token=' + WEDS.Environment.getUsuarioAtivo().id_sessao };

                if (id) {
                    options.url += '/' + id;
                }

                if (options.xmlData && options.xmlData.isModel) {
                    options.xmlData = this.getXmlRecord(options.xmlData);
                }

                //
                // Callback de retorno
                //

                options.success = options.success || function (response) {
                    var xml = response.responseXML;

                    if (xml) {
                        store = Ext.create('Ext.data.Store', {
                            model: model,
                            autoLoad: false
                        });

                        store.loadRawData(xml, false);

                        //if ((store) && (store.data.items.length <= 0)) {
                        var reader = Ext.create('Ext.data.reader.Xml', {
                            model: WEDS.model.Error,
                            record: 'error',
                            root: 'errors'
                        });

                        if (error) {
                            Ext.apply(error, reader.readRecords(xml).records[0]);
                        }
                        //}
                    }
                };

                //
                // Executa a requisição
                //

                Ext.Ajax.request(options);
                return store;
            },

            loadRecord: function (model, id, options, error) {
                var store = WEDS.Utils.loadStore(model, id, options, error);
                if ((store) && (store.data.items.length > 0)) {
                    return store.data.items[0];
                }
                return null;
            },

            getXmlRecord: function (record) {
                var me = this,
                    writer = Ext.create('Ext.data.writer.Xml'),
                    proxy = (Array.isArray(record)) ? record[0].getProxy() : record.getProxy(),
                    request = {};

                //
                // Constroi writer e request (MOCK) para ser utilizado na transformação para XML
                //

                writer.documentRoot = proxy.writer.defaultDocumentRoot;
                writer.record = proxy.writer.record;
                request.method = 'POST';
                request.operation = {};
                if (!Array.isArray(record)) record = [record];
                request.operation.records = record;

                //
                // Converte o registro para XML
                //

                writer.write(request);

                //
                // Retorna o XML
                //

                return request.xmlData
            },

            fileDownload: function (url) {
                var me = thi,
                    body = Ext.getBody();

                var form = body.createChild({
                    tag: 'form',
                    cls: 'x-hidden',
                    id: 'hiddenform-form',
                    action: url,
                    target: 'iframe'
                });

                form.dom.submit();
            },

            formatMoney: function (strInput) {
                strInput = strInput.replace(/\./g, ',');
                strInput = strInput.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
                return strInput;
            },

            salvaLogin: function (obj) {
                Ext.util.Cookies.set('wedslogin', Ext.encode(obj));
            },

            carregaLogin: function () {
                return Ext.decode(Ext.util.Cookies.get('wedslogin'));
            },

            toggle: function (e, att, clas, val) {
                if (!e) return;
                if (e.getAttribute(att).indexOf(val) >= 0)
                    e.setAttribute(att, clas)
                else e.setAttribute(att, clas + ' ' + val);
            },

            addClass: function (e, att, clas, val) {
                if (!e) return;
                if (e.getAttribute(att).indexOf(val) < 0)
                    e.setAttribute(att, clas + ' ' + val);
            },

            removeClass: function (e, att, clas, val) {
                if (!e) return;
                if (e.getAttribute(att).indexOf(val) >= 0)
                    e.setAttribute(att, clas);
            },

            checkFoto: function (tx_foto) {
                if (["images/foto_paciente.png", "images/foto_paciente_peq.png", "images/compromisso.png", "images/Foto_Compro_Peq.png"].indexOf(tx_foto) >= 0)
                    return tx_foto;
                else
                    return WEDS.Environment.urlFileserver + tx_foto;
            }
        }
    });

