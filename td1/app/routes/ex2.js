import Ember from 'ember'
import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object'

const Service = EmberObject.extend({
  countActive:computed('service.@each.active', function(){
    let services = this.get('service').filterBy('active',true);
    let count = 0;
    services.forEach(service =>{
      count += 1;
    });
    return count;

  }),
  sumActive:computed('service.@each.active', function(){
    let services = this.get('service').filterBy('active',true);
    let total=0;
    services.forEach(service =>{
      total +=service.price;
    });
    return total;
  })
});

export default Route.extend({
  model(){
    return Service.create({
      service: [
        {
          "name": "Web Development",
          "price": 300,
          "active":true
        },{
           "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ],

    });
  },
  actions:{
    toggleActive(service){
      Ember.set(service, 'active', !Ember.get(service, "active"));

    }
  }
});
