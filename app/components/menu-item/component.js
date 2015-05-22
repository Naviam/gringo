import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['thumbnail'],
	actions: {
		addToCart: function() {
			this.sendAction('addToCart', this.get('dish'));
		},
		edit: function() {
			this.sendAction('edit', this.get('dish'));
		},
		remove: function() {
			this.sendAction('remove', this.get('dish'));
		}
	}
});
