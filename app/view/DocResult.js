Ext.define('DocNearMe.view.DocResult', {
    extend: 'Ext.List',
    id: 'docResult',
    requires: ['DocNearMe.store.DocStore'],
    
    config: {
        title: 'Search Results',
        grouped: true,
        itemTpl: '{firstName} {lastName} {location}',
        store: 'DocStore',
        onItemDisclosure: true
    }
});
