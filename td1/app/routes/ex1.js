import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';

const Note = EmberObject.extend({
  size:computed('content', function(){
    this.set('info', 'Note modifiée');
    return this.get('MAX')-this.get('content').length;
  }),
  alertVisible:computed.notEmpty('content'),
  style:computed('size',function(){
    let size=this.get('size');
    let style = "alert-info";
    if(size < 50)
      style = "alert-warning";
    if(size < 20)
      style = "alert-danger";
    return style;

  })
});

export default Route.extend({
  model() {
    return Note.create({
      MAX: 100,
      content:"",
      info: ""
    });
  },
  actions:{
    save: function(model){
      let content = model.get('content');
      model.set('info', `Note enregistrée :  <strong>${content}</strong> `);
      model.set('style', 'alert-success');
    },
    clear: function(model){
      model.set('content', '');
      model.set('info', '');
    }
  }
})
