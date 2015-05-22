import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['thumbnail'],
	actions: {
		addDish: function() {
			this.sendAction('action', {
				name: this.get('dishName'),
				description: this.get('dishDescription'),
				weight: this.get('dishWeight'),
				price: this.get('dishPrice'),
				available: this.get('dishAvailable'),
				menuSection: this.get('section')
			});
			this.set('dishName', null);
			this.set('dishDescription', null);
			this.set('dishWeight', null);
			this.set('dishPrice', null);
			this.set('dishAvailable', null);
		}
	}
});
