import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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