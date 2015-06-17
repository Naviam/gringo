import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('menu', function() {
  	this.route('menu-chapter', { path: '/:name_eng'});
  });
});

export default Router;
