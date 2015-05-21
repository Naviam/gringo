import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createMenuSection: function() {
			var newMenuSection = this.store.createRecord('menu-section', {
				name: this.get('menuSectionName'),
				description: this.get('menuSectionDescription')
			});

			newMenuSection.save();
		}
	}
});
