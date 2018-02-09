import Route from '@ember/routing/route';

export default Route.extend({

  actions:{
    save: function () {
      var model = this.modelFor(this.routeName);
      console.log(model.newName);
      model.set("name",model.newName);
      this.transitionTo("user");
    }
  }
});
