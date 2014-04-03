Ext.define('DocNearMe.controller.DocController', {
    extend: 'Ext.app.Controller',

    config: {
        id: 'docController',
        refs: {
            findDocButton: 'button[action=findDoc]',
            docList: '#docList',
            docResult: '#docResult',
            docDetails: '#docDetails',
            docCount: '#docCount',
            docDetailsDeleteFieldset: '#docDetailsDeleteFieldset',
            searchDocButton: 'button[action=searchDoc]',
            cancelButton: 'button[action=cancel]',
            deleteButton: 'button[action=deleteDoc]'
        },
        control: {
            findDocButton: {
                tap: 'findDoc'
            },
            docList: {
                itemtap: 'showDoc'
            },
            searchDocButton: {
                tap: 'searchDoc'
            },
            cancelButton: {
                tap: 'cancel'
            },
            deleteButton: {
                tap: 'deleteDoc'
            }

        }
    },

    launch: function () {
        this.docCountUpdate();
    },

    docCountUpdate: function () {
        var store = this.getDocList().getStore();
        var count = store.getCount();
        if(count ==0)
            this.getDocCount().setTitle('No contacts found');
        else if(count == 1)
            this.getDocCount().setTitle('1 contact saved.');
        else
            this.getDocCount().setTitle(count + ' contacts saved.');
    },


    showDoc: function(list, index, target, doc, e, eOpts) {

        this.getDocDetails().setRecord(doc);
        this.getDocDetailsDeleteFieldset().setHidden(false);
        this.showDocDetails();

        setTimeout(function () {
            list.deselect(index);
        }, 500);
    },

    searchDoc: function(button, e, eOpts){
        //This function will search for doctors on the basis of location provided
        //by the patient.

    },

    showDocResult: function(){
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'right'
        });
        Ext.Viewport.setActiveItem(this.getDocResult());
    },


    findDoc: function(button, e, eOpts) {
        var newDoc = Ext.create('DocNearMe.model.DocModel', {
            patientName: '',
            location: '',
            specialityReqd: ''
        });

        this.getDocDetails().setRecord(newDoc);
        this.getDocDetailsDeleteFieldset().setHidden(true);
        this.showDocDetails();
    },


    showDocList: function() {
        this.docCountUpdate();
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'right'
        });
        Ext.Viewport.setActiveItem(this.getDocList());
    },

    showDocDetails: function() {
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'left'
        });
        Ext.Viewport.setActiveItem(this.getDocDetails());
    },

    cancel: function(button, e, eOpts) {
        this.showDocList();
    },

    deleteDoc: function(button, e, eOpts) {
        Ext.Msg.confirm('Delete contact?', 'Are you sure?', function (ans) {
            if (ans === 'yes') {
                var doc = this.getDocDetails().getRecord();
                var store = this.getDocList().getStore();
                store.remove(doc);
                this.showDocList();
            }
        }, this);
    },

    
});