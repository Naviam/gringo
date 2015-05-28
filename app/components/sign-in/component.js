import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'form',
	classNames: ['form-horizontal'],
	actions: {
		signin: function() {
			this.sendAction('action', {
				email: this.get('loginEmail'), 
				password: this.get('loginPassword')
			});
		}
	}
});
