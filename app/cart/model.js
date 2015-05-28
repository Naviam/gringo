import DS from 'ember-data';

export default DS.Model.extend({
	items: DS.hasMany('cart-item', { embedded: true }),
	user:  DS.belongsTo('user', { async: true })
});
