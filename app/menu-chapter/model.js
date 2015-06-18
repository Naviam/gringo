import DS from 'ember-data';

export default DS.Model.extend({
	name:        DS.attr('string'),
	name_eng:    DS.attr('string'),
	description: DS.attr('string'),
	image:       DS.attr('string'),
	dishes:      DS.hasMany('dish', { async: true })
});
