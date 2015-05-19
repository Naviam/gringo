import DS from 'ember-data';

export default DS.Model.extend({
	dish:     DS.belongsTo('dish', { async: true }),
	quantity: DS.attr('number')
});
