//onload function
$(function() {
  $("#get-input").click(function() {
    let textInput = $("#text-input").val()
    //if it's a search URL, you could add the text input to it
    $.getJSON(`https://api.tvmaze.com/search/shows?q=girls`, function(data) {
          console.log('data: ', data)
      //add something to the HTML
      $("#output").text(data.show.name)
      }).fail(function() {
        //we can add a "fail" function to our AJAX request to do something if it fails
        console.log("that request failed")
      })
    //reset the input
    $('#text-input').val('')
  })
})
