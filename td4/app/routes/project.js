import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.get('store').find('project',params.project_id);
    // Avec ou sans Ember retrouve quand meme le bon model
  }
});
