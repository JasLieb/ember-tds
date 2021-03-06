import DS from 'ember-data';

export default DS.Model.extend({
  code:DS.attr('string'),
  description:DS.attr('string'),
  developer: DS.belongsTo('developer'),
  project: DS.belongsTo('project',{inverse:'stories'}),
  step: DS.belongsTo('step'),
  tags: DS.hasMany('tag')
});
