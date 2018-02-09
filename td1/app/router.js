import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {
    this.route('update');
  });
  this.route('ex1');
  this.route('ex2');
});

export default Router;
