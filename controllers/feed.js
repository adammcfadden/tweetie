Tweet.FeedController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,
  body: null,
  id: null,
  date: null,
  actions: {
    tweet: function() {
      var body = this.get('body');
      var id = Math.floor(Math.random() * 250);
      var date = new Date();
      var object = {id: id, body: body, date: date};
      debugger;
      tweets.addObject(object);
    }
  }
});
