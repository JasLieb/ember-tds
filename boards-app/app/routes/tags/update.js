import Route from '@ember/routing/route';
import Ember from 'ember';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return RSVP.hash({
      oldTag: this.get('store').findRecord('tag',params.tag_id),
      colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
      })
  },
  afterModel(model){
    let newTag=EmberObject.create(JSON.parse(JSON.stringify(model.oldTag)));
    newTag.set('title', model.oldTag.get('title'));
    newTag.set('color', model.oldTag.get('color'));
    Ember.set(model,'newTag',newTag);
  },
  actions: {
    save(oldTag) {
      let model = this.modelFor(this.routeName);
      oldTag.set('title', model.newTag.get('title'));
      oldTag.set('color', model.newTag.get('color'));
      oldTag.save().then(
        ()=>{this.transitionTo("tags");});
    },
    cancel(){
      this.transitionTo("tags");
    }
  }
});
