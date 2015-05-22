import Ember from 'ember';

export default Ember.Controller.extend({
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
			newDish.save();
			dish.menuSection.save();
		},
		removeDishFromMenu: function(dish) {
			dish.deleteRecord();
			dish.save();
		},
		addDishToCart: function(dish) {
			 
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
