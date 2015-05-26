/* global Firebase */
import Ember from 'ember';
import ENV from 'gringo/config/environment';

export default Ember.Controller.extend({
	//ref: new Firebase(ENV.firebase),
	init: function() {
		var ref = new Firebase(ENV.firebase);
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
