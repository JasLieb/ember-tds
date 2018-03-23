import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let project = this.get('store').findRecord('project', params.project_id);
    return project;
  }
});
