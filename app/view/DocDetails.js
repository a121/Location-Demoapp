Ext.define('DocNearMe.view.DocDetails', {
    extend: 'Ext.form.Panel',

    config: {
        id: 'docDetails',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Search Doctors',
            ui: 'light',
            items: [{
                xtype: 'button',
                text: 'Back',
                ui: 'back',
                action: 'cancel'
            }, 
            {
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                text: 'Search',
                ui: 'action',
                action: 'searchDoc'
            }]
        }, 
        {
            xtype: 'fieldset',
            id: 'mainFieldset',
            instructions: 'Enter the following information',
            title: 'Details',
            items: [{
                xtype: 'textfield',
                id: 'patientNameField',
                label: 'Name',
                name: 'patientName',
                autoCapitalize: true,
                placeHolder: 'Enter your name'
            },
            {
                xtype: 'textfield',
                id: 'patientLocation',
                label: 'Location',
                name: 'patientLocation',
                placeHolder: 'Enter your location'
            },{
                xtype: 'textfield',
                id: 'specialityReqd',
                label: 'speciality',
                name: 'specialityReqd',
                placeHolder: 'Enter the speciality required'
            }]
        },
        {
            xtype: 'fieldset',
            id: 'docDetailsDeleteFieldset',
            title: '',
            instructions: 'Want to cancel this search?',
            items: [{
                xtype: 'button',
                id: 'deleteButton',
                ui: 'decline',
                text: 'Cancel',
                action: 'deleteDoc'
            }]
        }]
    }
});