$(document).ready(function () {
    console.log("linked");

    $(".devour").on("click", function () {
        var id = $(this).data("id");
        console.log(id);

        var nowDevoured = {
            devoured: true
        }

        $.ajax("/" + id, {
            type: "PUT",
            // data: nowDevoured
        }).then(function () {
            location.reload();
        })
    })

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newData = {
            name: $("#burger_name").val().trim(),
            devour: $("#devoured").val().trim()
        };

        // Send the POST request.
        $.ajax("/", {
            type: "POST",
            data: newData
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });




})