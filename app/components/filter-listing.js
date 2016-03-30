import Ember from 'ember';

export default Ember.Component.extend({
  filter: null,
  filteredList: null,
  actions: {
    autoComplete() {
      this.get('autoComplete')(this.get('filter'));
    },
    choose(value) {
      this.set('filter', value);
    }
  }
});
