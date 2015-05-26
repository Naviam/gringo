import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var self = this;
		var user = this.modelFor('application');
		var cart = this.store.createRecord('cart', {
			user: user
		});
		cart.save();
		return {
			sections: self.store.find('menu-section'),
			cart: cart
		};
	}
});