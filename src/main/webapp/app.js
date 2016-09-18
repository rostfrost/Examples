Ext.application({
    name : 'Contract',
    views: [
        'AddContractFormView',
        'ContractGridView'
    ],
    controllers : [ 'ContractController' ],
    stores      : [ 'ContractStore'],

    launch: function () {
        Ext.create('Ext.panel.Panel', {
            width: 1300,
            height: 540,
            padding: 15,
            layout: 'border',
            items: [
                {
                    xtype: 'contractGridView',
                    region: 'center'
                }
            ],
            renderTo: Ext.getBody()
        });
    }
});