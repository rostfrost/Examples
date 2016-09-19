Ext.define('Contract.controller.ContractController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            selector: 'contractGridView',
            ref: 'contractGridView'
        },
        {
            selector: 'addContractFormView',
            ref: 'addContractFormView'
        }
    ],

    init: function () {
        this.control({
            'contractGridView  button[action=add]': {
                click: this.onAddContract
            },
            'addContractFormView  button[action=save]': {
                click: this.onSaveContract
            }
        });
    },
    onAddContract: function () {
        Ext.widget('addContractFormView');
    },
    onSaveContract: function (button) {
        var me = this;
        var contractModel = Ext.create('Contract.model.ContractModel');
        //contractModel.set(this.getAddContractFormView().down('form').getValues());
        contractModel.save({
            success: function (operation) {
                var objAjax = operation.data;
                Ext.getStore('ContractStore').add(objAjax);
                me.getAddContractFormView().close();
            }
            ,
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'ERORRE',
                    msg: 'Произошла ошибка, запись не была добавлена в базу',
                    buttons: Ext.Msg.OK
                });
            }
        });
    }
});