/*
 * GiHub activity widget.
 * Author: Antonio Vázquez Blanco
 * Email: antoniovazquezblanco@gmail.com
 */

$(document).ready(function(){
  $(".github-activity").applyGithubActivityWidget();
});

function isStorageAvailiable() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

(function($){
  $.fn.applyGithubActivityWidget = function() {
    // Get the user...
    var user = this.data("github-user");
    if(!user){
      throw "Could not read Github username. Add the data-github-user attribute the element.";
    }

    // Data...
    var cache_key = "github-" + user + "-activity";
    var events = null;

    // Check cache for data...
    if(isStorageAvailiable()) {
      data = JSON.parse(localStorage.getItem(cache_key));
      if(data !==null && data.expiry > Date.now()) {
        events = data.events;
      }
    }

    // Else download and cache it...
    if(events === null) {
      var url = "https://api.github.com/users/" + user + "/events";
      $.ajax({
        url: url,
        dataType: 'json',
        async: false,
        success: function(data) {
          events = data;
        }
      });
      if(isStorageAvailiable()) {
        var expiration = Date.now() + 60 * 60 * 1000;
        localStorage.setItem(cache_key, JSON.stringify({
          events: events,
          expiry: expiration
        }));
      }
    }

    // Populate data into the widget...
    var messages = {
      "PushEvent": "I pushed stuff to ",
      "IssuesEvent": "I opened an issue in ",
      "IssueCommentEvent": "I commented on ",
      "PullRequestEvent": "I opened a pull request in ",
      "ForkEvent": "I forked ",
      "WatchEvent": "I have starred "
    };
    var list = $("<ul>");
    $.each(events, function(index, element) {
      list.append(
        $("<li>").append(
          $("<img>").attr("src", "images/github-"+element.type+".png")
        ).append(
          $("<p>").html(messages[element.type]).append(
            $("<a>").text(element.repo.name).attr("href", "https://github.com/"+element.repo.name)
          ).addClass("github-truncate")
        )
      );
    });
    var content = $("<div>").addClass("github-activity").append(
      $("<div>").addClass("github-activity-header").append(    // Header
        $("<h1>").append(
          $("<a>").attr("href", "https://github.com/" + user + "?tab=activity").text("GitHub activity")
        )
      ).append(
        $("<a>").addClass("github-button").attr("href", "https://github.com/"+user).text("Follow").prepend(
          $("<i>").addClass("github-icon")
        )
      ).append(
        $("<br>").addClass("github-clear")
      )
    ).append(
      $("<div>").addClass("github-activity-body").append(
        list
      )
    );
    this.replaceWith(content);
  }
})(jQuery);
