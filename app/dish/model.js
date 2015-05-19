import DS from 'ember-data';

export default DS.Model.extend({
	name:        DS.attr('string'),
	ingridients: DS.attr('string'),
	weight:      DS.attr('number'),
	price:       DS.attr('number'),
	hot:         DS.attr('number'),
	available:   DS.attr('boolean'),
	show:        DS.attr('boolean')
});