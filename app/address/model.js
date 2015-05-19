import DS from 'ember-data';

export default DS.Model.extend({
	street:     DS.attr('string'),
	house:      DS.attr('string'),
	entrance:   DS.attr('string'),
	code:       DS.attr('string'),
	floor:      DS.attr('number'),
	appartment: DS.attr('string'),
	removed:    DS.attr('boolean'),
	user:       DS.belongsTo('user', { async: true })
});
