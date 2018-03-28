import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  stories: DS.hasMany('story')
});
