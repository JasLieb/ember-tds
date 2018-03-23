import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      tag: EmberObject.create({}),
      colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative']
    });
  },
  actions:{
    newTag(tag){
      tag=this.get('store').createRecord('tag',{title:tag.title,color:tag.color});
      let self=this;
      tag.save().then(()=>{
        let model = self.modelFor(this.routeName);
        Ember.$('#ddTags').dropdown('set selected',tag.id);
        Ember.set(model,'tag',EmberObject.create({}));
      });
    }
  }
});
