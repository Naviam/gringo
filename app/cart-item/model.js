import DS from 'ember-data';

export default DS.Model.extend({
	quantity: DS.attr('number'),
	cart:     DS.belongsTo('cart', { async: true }),
	dish:     DS.belongsTo('dish', { async: true })
});