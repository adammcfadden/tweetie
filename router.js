Tweet.Router.map(function() {
  this.resource('feed', {path: '/'}, function() {
    this.resource('tweet', {path: 'feed/:tweet_id'});
  });
});
