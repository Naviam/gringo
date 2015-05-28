import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'form',
	classNames: ['form-horizontal'],
	actions: {
		submit: function() {
			var section = {
				name: this.get('menuSectionName'),
				description: this.get('menuSectionDescription')
			};
			this.sendAction('action', section);
			this.setProperties({
				menuSectionName: '',
				menuSectionDescription: ''
			});
		}
	}
});
