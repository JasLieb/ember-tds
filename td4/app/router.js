import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
  });
  this.route('projects', function() {
    this.route('new');
  });
  this.route('project',{path:'project/:project_id'});
});

export default Router;
