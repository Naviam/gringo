/* global Firebase */
import Ember from 'ember';
import ENV from 'gringo/config/environment';

export default Ember.Controller.extend({
	fb: function() {
		return new Firebase(ENV.firebase);
	}.property(),
	authHandler: function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
			this.notifications.addNotification({
                message: 'Логин или пароль были введены неверно.',
                type: 'error',
                autoClear: true
            });
		} else {
		    console.log("Authenticated successfully with payload:", authData);
		    this.notifications.addNotification({
                message: 'Вы успешно авторизовались.',
                type: 'error',
                autoClear: true
            });
		}
	},
	actions: {
		signin: function(form) {
			var ref = this.get('fb');
			ref.authWithPassword({
			 	email    : form.email,
			 	password : form.password
			}, this.get('authHandler'));
		},
		createMenuChapter: function(chapter) {
			var self = this;

			var newChapter = self.store.createRecord('menu-chapter', chapter);

			newChapter.save().then(function(result) {
				if (result) {
					self.notifications.addNotification({
		                message: 'Раздел меню был успешно создан.',
		                type: 'success',
		                autoClear: true
		            });
				} else {
					self.notifications.addNotification({
		                message: 'При создании раздела меню возникла непредвиденная ошибка.',
		                type: 'error',
		                autoClear: true
		            });
				}
			});
		},
		deleteMenuChapter: function(sectionToDelete) {
			var self = this;
			sectionToDelete.deleteRecord();
			sectionToDelete.save().then(function(result) {
				if (result) {
					self.notifications.addNotification({
		                message: 'Раздел меню был успешно удален.',
		                type: 'success',
		                autoClear: true
		            });
				} else {
					self.notifications.addNotification({
		                message: 'При удалении раздела меню возникла непредвиденная ошибка.',
		                type: 'error',
		                autoClear: true
		            });
				}
			});
		},
		addDishToMenu: function(dish) {
			var self = this;
			var newDish = self.store.createRecord('dish', dish);

			newDish.save().then(function() {
				dish.menuChapter.save();
				self.notifications.addNotification({
	                message: 'Блюдо было успешно добавлено.',
	                type: 'success',
	                autoClear: true
	            });
			});
		},
		removeDishFromMenu: function(dish) {
			dish.deleteRecord();
			dish.save();
		},
		addDishToCart: function(dish) {
			var cart = this.get('model.cart');
			// find dish in a cart
			// if there is no such dish in a cart create new cart item
			var cartItem = this.store.createRecord('cart-item', {
				dish: dish,
				cart: cart,
				quantity: 1
			});
			// if dish exists update cart item quantity
			var cartItems = cart.cartItems || [];
			cartItem.save().then(function(newCart) {
				cartItems.pushObject(newCart);
				cart.save();
			});
		},
		editDish: function(dish) {
			dish.save();
		},
		removeDish: function(dish) {
			var self = this;
			dish.deleteRecord();
			dish.save().then(function(result) {
				if (result) {
					self.notifications.addNotification({
		                message: 'Блюдо было успешно удалено.',
		                type: 'success',
		                autoClear: true
		            });
				} else {
					self.notifications.addNotification({
		                message: 'При удалении блюда возникла непредвиденная ошибка.',
		                type: 'error',
		                autoClear: true
		            });
				}
			});
		}
	}
});
