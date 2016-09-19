var states = Ext.create('Ext.data.Store', {
    fields: ['id', 'type'],
    data : [
        {"id":"1", "type":"Тип договора № 1"},
        {"id":"2", "type":"Тип договора № 2"},
        {"id":"3", "type":"Тип договора № 3"}
    ]
});

Ext.define('Contract.view.AddContractFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addContractFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'seriesNumber',
                    fieldLabel: 'Серия - Номер',
                    regex: /^([А-Яа-я]{3})[\\-]([A-Za-zА-Яа-я0-9]{1,8})$/,
                    regexText: 'Серия должна состоять из 3 русских букв. Номер до 8 символов состоящий из цифр и букв(русских, английских)',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },

                {
                    xtype: 'combobox',
                    name: 'typeContract',
                    fieldLabel: 'Тип договора',
                    store: states,
                    queryMode: 'local',
                    displayField: 'type',
                    valueField: 'id',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },

                {
                    xtype: 'datefield',
                    name: 'dateSigning',
                    fieldLabel: 'Дата подписания',
                    format: 'd.m.Y',
                    altFormats: 'd.m.Y',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },

                {
                    xtype: 'datefield',
                    name: 'dataBeginning',
                    fieldLabel: 'Дата начала действия',
                    format: 'd.m.Y',
                    altFormats: 'd.m.Y',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },

                {
                    xtype: 'datefield',
                    name: 'endDate',
                    fieldLabel: 'Дата окончания',
                    format: 'd.m.Y',
                    altFormats: 'd.m.Y'
                },
                {
                    xtype: 'textfield',
                    name: 'sumWithoutNds',
                    fieldLabel: 'Сумма без НДС',
                    regex: /^[0-9]\d*?(\.\d{2})?$/,
                    regexText: 'Поле должно состоять из цифр',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'rateNds',
                    fieldLabel: 'Ставка',
                    regex: /^[0-9]\d*?(\.\d{2})?$/,
                    regexText: 'Поле должно состоять из цифр',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'sumNds',
                    fieldLabel: 'Сумма НДС',
                    regex: /^[0-9]\d*?(\.\d{2})?$/,
                    regexText: 'Поле должно состоять из цифр',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },

                 {
                 xtype: 'textfield',
                 name: 'sumWithNds',
                 fieldLabel: 'Сумма c НДС',
                 regex: /^[0-9]\d*?(\.\d{2})?$/,
                 regexText: 'Поле должно состоять из цифр',
                 allowBlank: false,
                 blankText: 'Это поле должно быть заполнено'
                 },

                 {
                     // Узнать про поле read-only!!!!!
                     fieldLabel: 'Соответствие',
                     xtype:'combobox',
                     name:'conformity',
                     trueText:'Да',
                     falseText:'Нет',
                     allowBlank: false,
                     blankText: 'Это поле должно быть заполнено'
                 },
                 {
                     xtype: 'textfield',
                     name: 'numberTs',
                     fieldLabel: 'Номер ТС',
                     regex: /^([0-9]{1,20})*$/,
                     regexText: 'Поле должно состоять из цифр',
                     allowBlank: false,
                     blankText: 'Это поле должно быть заполнено'
                 },
                 {
                     xtype: 'textareafield',
                     grow : true,
                     name: 'note',
                     fieldLabel: 'Примечание',
                     regex: /^.{1,255}/,
                     regexText: 'Максимальная длина 255 символов'
                 }
            ]
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            action: 'save'//,
            // disabled: true
        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }
        }
    ]
});