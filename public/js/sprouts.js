var pageNumber = 1;

$('.more-sprouts').on('click', function(event) {
  event.preventDefault();

    pageNumber++;

    var request = $.ajax({
      method: "GET",
      url: "/tweets.json",
      data: { page: pageNumber }
    }).done(function(tweets) {

      tweets.forEach(function(tweet) {
        var lineBegin = "<li class='tweet'>";
        var lineEnd = "</li>";
        var body = "<div class='body'>" + tweet["text"] + "</div>";
        var username = "<div class='user'>" + tweet["username"] + "</div>";
        $(".tweets").append(lineBegin + body + username + lineEnd);
      });
    });
  });
