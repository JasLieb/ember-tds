import DeleteRoute from '../delete-route';
import Ember from 'ember';

export default DeleteRoute.extend({
  model(params){
    let id = params.tag_id;
    let rec = this.get('store').findRecord('tag',params.tag_id);
    let projects = this.get('store').findAll('story').filterBy("tags", rec.id);
    Ember.Logger.log(projects)
    return rec;
  },
  getRedirectRoute(){
    return "tags";
  }
});
