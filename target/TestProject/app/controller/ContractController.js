Ext.define('Contract.controller.ContractController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            'contractGridView  button[action=add]': {
                click: this.onAddContract
            }
        });
    },
    onAddContract : function () {
        Ext.widget('addContractFormView');
    },
});