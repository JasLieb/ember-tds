import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      name: "N. Cage",
      skills: ["emberJS", "PHP", "Oracle"]
    };
  }
});
