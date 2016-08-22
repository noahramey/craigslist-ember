import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    showUpdateForm() {
      this.set('updateListingForm', true);
    },
    updateListing(listing) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        location: this.get('location'),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.set('updateListingForm', false);
      this.sendAction('update', listing, params);
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
      this.set('location', '');
      this.set('image', '');
    },
    cancelUpdateListing(){
      this.set('updateListingForm', false);
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
      this.set('location', '');
      this.set('image', '');
    }
  }
});
