/* global Firebase */
import Ember from 'ember';
import ENV from 'gringo/config/environment';

export default Ember.Controller.extend({
	fb: function() {
		return new Firebase(ENV.firebase);
	}.property(),
	//ref: new Firebase(ENV.firebase),
	init: function() {
		var ref = this.get('fb')
		var authData = ref.getAuth();
		if (authData) {
		  console.log("User " + authData.uid + " is logged in with " + authData.provider);
		} else {
		  console.log("User is logged out");
		  ref.authAnonymously(function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			  }
			});
		}
	}
});
