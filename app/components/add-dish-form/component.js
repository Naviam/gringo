import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['thumbnail'],
	dishNameId: function() {
		return "dishName" + this.get('section.id');
	}.property(),
	dishDescriptionId: function() {
		return "dishDescription" + this.get('section.id');
	}.property(),
	dishWeightId: function() {
		return "dishWeight" + this.get('section.id');
	}.property(),
	dishPriceId: function() {
		return "dishPrice" + this.get('section.id');
	}.property(),
	dishImageId: function() {
		return "dishImage" + this.get('section.id');
	}.property(),
	actions: {
		addDish: function() {
			this.sendAction('action', {
				name: this.get('dishName'),
				description: this.get('dishDescription'),
				weight: this.get('dishWeight'),
				price: this.get('dishPrice'),
				available: this.get('dishAvailable'),
				menuChapter: this.get('section')
			});
			this.setProperties({
				dishName: '',
				dishDescription: '',
				dishWeight: '',
				dishPrice: '',
				dishAvailable: ''
			});
		}
	}
});
