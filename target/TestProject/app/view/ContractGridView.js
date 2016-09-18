Ext.define('Contract.view.ContractGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contractGridView',
    title: 'Test Project - Contacts',
    width: 400,
    height: 1300,
    store: 'ContractStore',
    frame: true,
    viewConfig: {
        markDirty: false
    },
    
    columns: [
        {
            text: 'Серия - Номер',
            sortable: true,
            dataIndex: 'seriesNumber',
            editor: {
                regex: /^([А-Яа-я]{3})[\\-]([A-Za-zА-Яа-я0-9]{1,8})$/,
                regexText: 'Серия должна состоять из 3 русских букв. Номер - до 8 символов состоящий из цифр и букв(русских, английских)',
                xtype: 'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Тип договора',
            flex: 1,
            sortable: true,
            dataIndex: 'typeContract',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        }, {
            text: 'Дата подписания',
            dataIndex: 'dateSigning',
            xtype: 'datecolumn',
            sortable: true,
            format: 'd.m.Y',
            altFormats: 'd.m.Y',
            editor: {
                xtype: 'datefield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Дата начала действия',
            dataIndex: 'dataBeginning',
            flex: 2,
            xtype: 'datecolumn',
            format: 'd.m.Y',
            altFormats: 'd.m.Y',
            sortable: true,
            editor: {
                xtype: 'datefield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        }, {
            text: 'Дата окончания',
            dataIndex: 'endDate',
            xtype: 'datecolumn',
            format: 'd.m.Y',
            altFormats: 'd.m.Y',
            sortable: true,
            editor: {
                xtype: 'datefield'
            }
        },
        {
            text: 'Сумма без НДС',
            sortable: true,
            dataIndex: 'sumWithoutNds',
            editor: {
                xtype: 'textfield',
                regex: /^[0-9]\d*?(\.\d{2})?$/,
                regexText: 'Поле должно состоять из цифр',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Ставка',
            sortable: true,
            dataIndex: 'rateNds',
            editor: {
                xtype: 'textfield',
                regex: /^[0-9]\d*?(\.\d{2})?$/,
                regexText: 'Поле должно состоять из цифр',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },

        {
            text: 'Сумма НДС',
            sortable: true,
            dataIndex: 'sumNds',
            editor: {
                xtype: 'textfield',
                regex: /^[0-9]\d*?(\.\d{2})?$/,
                regexText: 'Поле должно состоять из цифр',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Сумма c НДС',
            sortable: true,
            dataIndex: 'sumWithNds',
            editor: {
                xtype: 'textfield',
                regex: /^[0-9]\d*?(\.\d{2})?$/,
                regexText: 'Поле должно состоять из цифр',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },

        {
            text: 'Соответствие',
            sortable: true,
            xtype: 'booleancolumn',
            dataIndex: 'conformity',
            trueText: 'Да',
            falseText: 'Нет',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Номер ТС',
            sortable: true,
            dataIndex: 'numberTs',
            editor: {
                xtype: 'textfield',
                regex: /^([0-9]{1,20})*$/,
                regexText: 'Цена должна состоять из цифр',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Примечание',
            sortable: true,
            dataIndex: 'note',
            editor: {
                xtype: 'textareafield',
                regex: /^.{1,255}/,
                regexText: 'Максимальная длина 255 символов'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Сохранить',
            cancelBtnText: 'Отменить'
        })
    ],

    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Добавить',
                    action: 'add'
                },
                '-',
                {
                    text: 'Редактировать',
                    action: 'edit',
                    disabled: true
                },
                '-',
                {
                    text: 'Удалить',
                    action: 'delete',
                    disabled: true
                }
            ]
        }
    ]
});