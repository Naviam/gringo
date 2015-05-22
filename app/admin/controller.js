import Ember from 'ember';

export default Ember.Controller.extend({
	cart: null,
	actions: {
		createMenuSection: function() {
			var newMenuSection = this.store.createRecord('menu-section', {
				name: this.get('menuSectionName'),
				description: this.get('menuSectionDescription')
			});

			newMenuSection.save();
		},
		deleteMenuSection: function(sectionToDelete) {
			sectionToDelete.deleteRecord();
			sectionToDelete.save();
		},
		addDishToMenu: function(dish) {
			var newDish = this.store.createRecord('dish', dish);

			newDish.save().then(function(saved) {
				// Ember.Logger.log('saved dish', saved);
				dish.menuSection.save();
				// Ember.Logger.log('new dish', newDish);
				// var section = newDish.menuSection;
				// section.dishes.pushObject(saved);
				// section.save();
			});
		},
		removeDishFromMenu: function(dish) {
			dish.deleteRecord();
			dish.save();
		},
		addDishToCart: function(dish) {
			if (this.get('cart')) {
			} else {
				this.set('cart', this.store.createRecord('cart'));
			}
			this.get('cart').pushObject(dish);
			this.get('cart').save();
		},
		editDish: function(dish) {
			dish.save();
		},
		removeDish: function(dish) {
			dish.deleteRecord();
			dish.save();
		}
	}
});
