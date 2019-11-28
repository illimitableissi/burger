$(function() {
  $(".submit-button").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eat-button").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
          }).then(
            function() {
              console.log("burger eaten");
              // Reload the page to get the updated list
              location.reload();
            }
          );
     })
});