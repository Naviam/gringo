import DS from 'ember-data';

export default DS.Model.extend({
	address:        DS.belongsTo('address', { async: true }),
	paymentOption:  DS.attr('string'),
	deliveryOption: DS.attr('string'),
	status:         DS.attr()
});
