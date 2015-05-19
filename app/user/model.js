import DS from 'ember-data';

export default DS.Model.extend({
	fullName:  DS.attr('string'),
	birthday:  DS.attr('number'),
    avatar:    DS.attr('string'),
    addresses: DS.hasMany('address', { async: true }),
    orders:    DS.hasMany('order', { aysnc: true })
});
