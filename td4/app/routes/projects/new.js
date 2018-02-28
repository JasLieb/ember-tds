import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
        project: EmberObject.create(),
        developers: this.get('store').findAll('developer')
    });
  },
  actions:{
    addNew: function(data){
      let store = this.get("store");
      let dev = store.createRecord('project',
        JSON.parse(JSON.stringify(data)));
      dev.save().then(() => {
        this.transitionTo("projects");
      });
    }
  }
});
