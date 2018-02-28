import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    addNew: function(data){
      let store = this.get("store");
      let dev = store.createRecord('developer',
        JSON.parse(JSON.stringify(data)));
      dev.save().then(() => {
        this.transitionTo("developers");
      });
    }
  }
});
