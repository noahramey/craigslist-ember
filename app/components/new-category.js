import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory() {
      var params = {
        title: this.get('title')
      };
      if (params.title !== undefined) {
        this.sendAction('saveCategory', params);
        this.set('title', '');
      } else {
        alert('Please fill-out field to submit.')
      }
    },
    cancelSaveCategory() {
      this.set('title', '');
    }
  }
});
