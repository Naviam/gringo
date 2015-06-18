import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'form',
	classNames: ['form-horizontal'],
	actions: {
		submit: function() {
			var chapter = {
				name:        this.get('chapterName'),
				name_eng:    this.get('chapterNameEnglish'),
				image:       this.get('chapterImageUrl'),
				description: this.get('chapterDescription')
			};

			this.sendAction('action', chapter);

			this.setProperties({
				chapterName: '',
				chapterImageUrl: '',
				chapterDescription: ''
			});
		}
	}
});
