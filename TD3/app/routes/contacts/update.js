import Route from '@ember/routing/route';
import Object from '@ember/object';

export default Route.extend({
  model(){
    return Object.create();
  },
  actions:{
    updateContact: function(datas){
      let store = this.get("store");
      let contact = store.createRecord('contact',
        JSON.parse(JSON.stringify(data)));
      contact.save();
    }
  }
});
