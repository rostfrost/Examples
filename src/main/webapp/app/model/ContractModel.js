Ext.define('Contract.model.ContractModel', {
    extend: 'Ext.data.Model',
    fields: ['seriesNumber', 'typeContract', 'dateSigning',
                'dataBeginning','endDate','sumWithoutNds', 'rateNds', 'sumNds','sumWithNds', 'conformity', 'numberTs', 'note'],

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