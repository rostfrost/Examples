Ext.define('Contract.store.ContractStore', {
    extend: 'Ext.data.Store',
    requires : [
        'Contract.model.ContractModel'
    ],
    model: 'Contract.model.ContractModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'contract',
            read: 'contract',
            destroy: 'contract',
            update: 'contract'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});