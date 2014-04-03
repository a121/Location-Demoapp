Ext.define('DocNearMe.store.DocStore',{
	extend: 'Ext.data.Store',
	requires: [
	    'DocNearMe.model.DocModel'
	],
	config: {
		model: 'DocNearMe.model.DocModel',
		identifier: {
			type: 'uuid'
		},
		sorters: 'location',
		autoSync: true,
		autoLoad: true,
		singleton: true,
		storeId: 'DocStore',
		proxy: {
			type: 'localstorage',
			id: "docStore"
		},
		grouper: function(record){
			return record.get("location");
			
		}
	}
});