import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),
  location: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});
