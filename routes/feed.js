Tweet.FeedRoute = Ember.Route.extend({
  // controllerName: 'feedArray',
  // renderTemplate: function() {
  //   this.render('feed');
  // },
  model: function() {
    return tweets;
  }
});
