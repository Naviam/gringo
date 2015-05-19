import DS from 'ember-data';

export default DS.Model.extend({
	cartItems: DS.hasMany('cart-item', { async: true })
});
