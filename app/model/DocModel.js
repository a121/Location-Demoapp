Ext.define('DocNearMe.model.DocModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		{
			name: 'id',
			type: 'int'
		},{
			name: 'patientName',
			type: 'string'
		},{
			name: 'location',
			type: 'string'
		},{
			name: 'specialityReqd',
			type: 'string'
		}],
		idProperty: 'id'
	}
});
