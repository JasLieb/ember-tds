import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import {computed} from '@ember/object';

const Contacts = EmberObject.extend({
  contacts: computed('filter', 'datas.@each.isDeleted', function(){
    let all = this.get('datas').filterBy('isDeleted', false);
    let filt = this.get('filter');
    if(filt)
      return all.filter(
        (contact)=> {
          return contact.get('nom').includes(filt);
        });
    return all;
  }),
  deleteds: computed.filterBy('datas','isDeleted', true),
  deletedsCount: computed.alias('deleteds.length')
});

export default Route.extend({
  model(){
    return Contacts.create({datas: this.get("store").findAll("contact")});
  },
  actions:{
    delete: function(contact){
      contact.deleteRecord();
    },
    cancelDel: function(deleteds){
      deleteds.forEach((contact) =>{
        contact.rollbackAttributes();
      });
    }
  }
});
