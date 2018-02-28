import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(){
    return this.get('store').findAll('project');
  },
  actions:{
    didTransition(){
      Ember.run.next(this, 'initDropDown');
    }
  },
  initDropDown(){
    Ember.$('.ui.dropdown').dropdown();
  }
});
