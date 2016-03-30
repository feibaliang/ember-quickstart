import Ember from 'ember';

export default Ember.Component.extend({
  filteredList: null,
  actions: {
    autoComplete(param) {
      if(param !== "") {
        this.people.store.query('scientist', {name: param}).then((result) => {
          this.set('filteredList', result);
        });
      } else {
        this.set('filteredList', null);
      }
    }
  }
});
