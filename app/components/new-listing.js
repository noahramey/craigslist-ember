import Ember from 'ember';

export default Ember.Component.extend({
  newListingForm: false,
  actions: {
    showListingForm() {
      this.set('newListingForm', true);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        date: (new Date().getMonth() + 1) + "-" + (new Date().getDate()),
        location: this.get('location'),
        image: this.get('image'),
        category: this.get('category'),
      };
      if (params.title !== undefined && params.author !== undefined && params.content !== undefined && params.date !== undefined && params.image !== undefined && params.location !== undefined) {
        this.sendAction('saveListing', params);
        this.set('title', '');
        this.set('author', '');
        this.set('content', '');
        this.set('location', '');
        this.set('image', '');
        this.set('newListingForm', false);
      } else {
        this.set('title', '');
        this.set('author', '');
        this.set('content', '');
        this.set('location', '');
        this.set('image', '');
        alert('Please fill out all fields before submitting your listing.');
      }
    },
    clearSaveListing() {
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
      this.set('image', '');
      this.set('location', '');
      this.set('newListingForm', false);
    }
  }
});
