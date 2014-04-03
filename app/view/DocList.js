Ext.define('DocNearMe.view.DocList', {
    extend: 'Ext.dataview.List',

    requires: [
        'DocNearMe.store.DocStore'
    ],

    config: {
        id: 'docList',
        store: Ext.create('DocNearMe.store.DocStore'),
        emptyText: '<p class="instructions">No doctors selected yet. Click on Find button to search for doctors.</p>',
        itemTpl: '<div>Patient Name : {patientName} </div>',
        grouped: true,
        onItemDisclosure: true,

        items: [{
            xtype: 'toolbar',
            title: 'Doctors Near Me',
            docked: 'top',
            ui: 'light',
            items: [{
                xtype: 'spacer' 
            }, 
            {
                xtype: 'button',
                iconCls: '',
                iconMask: true,
                text: 'Find',
                ui: 'forward',
                action: 'findDoc'
            }]
        }, {
            xtype: 'toolbar',
            title: '',
            docked: 'bottom',
            ui: 'light',
            id: 'docCount'
        }]
    }
});