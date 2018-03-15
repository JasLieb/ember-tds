import Component from '@ember/component';

export default Component.extend({
  actions:{
    delete(obj){
      obj.destroyRecord();
    }
  }
});
