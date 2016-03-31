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
        var body = tweet["text"]
        var username = tweet["username"]
        $(".tweets").append("<li class='tweet'>" +
          "<div class='body'>" + body + "</div>" +
          "<div class='user'>" + username + "</div>" +
        "</li>");
      });
    });
  });
