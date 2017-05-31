import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  category: DS.attr(),
  content: DS.attr(),
  image: DS.attr()
});