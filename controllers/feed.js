Tweet.FeedController = Ember.ArrayController.extend({
  showDetails: false,
  sortProperties: ['date'],
  sortAscending: false,
  actions: {
    tweet: function() {
      var body = this.get('body')
      if (body.length > 140) {
        alert('yo dawg I heard you like tweets but to tweet you gotta tweet you tweets under 140 tweets')
      } else {
        var id = (tweets.length + 1).toString();
        var date = new Date();
        formattedDate = date.toDateString();
        var object = {id: id, body: body, date: date, formattedDate: formattedDate};
        tweets.addObject(object);
      }
        this.set('body', '')
    },
    details: function() {
      this.set('showDetails', true)
    },
    detailsHide: function() {
      this.set('showDetails', false)
    }
  }
});
