import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      //Utile quand plus d'1 requete sur le store
        project: this.get('store').findAll('project'),//EmberObject.create(),
        developers: this.get('store').findAll('developer')
    });
  },
  actions:{
    addNew: function(data){

      let store = this.get("store");
      let start = new Date(data.startDate);
      let due = new Date(data.dueDate);
      let dev = store.createRecord('project', {
        name: data.name,
        description: data.description,
        startDate: start,
        dueDate: due,
        owner: data.developerId
      });
      dev.save().then(() => {
        this.transitionTo("projects");
      });
    }
  }
});
