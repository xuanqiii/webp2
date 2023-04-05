// //onload function
// $(function() {
//   $("#shows-search").click(function() {
//     let searchTerm = $("#showName").val()
//     $("#fail").text('')
//     // make sure the searchTerm isn't empty
//       if (searchTerm !== '') {
//         https://api.tvmaze.com/search/shows?q=girls
//         // here we pass the API the topic as our "query"
//         $.getJSON(`https://api.tvmaze.com/search/shows?q=${searchTerm}`, function(data) {
//           //but, depending on what we search, we could get thousands of things or nothing
//           //so we should account for the first case
//           if (data.show.name.length <= 0) {
//               $('#fail').text("We couldn't find anything for that topic.")
//           } else {
//             //let's just append the first 3
//             for (let i = 0; i < 5; i++) {
//               let show = data.show.name[i]
//               $('#recommendations').append('<li>' + show.name + ' generes ' + show.genres + show.rating +'</li>')
//             }
//           }

//           // this could return
//       }).fail(function() {
//         //we can add a "fail" function to our AJAX request to do something if it fails
//         $('#fail').text("We couldn't find anything for that topic.")
//         console.log("we can't find anything")
//       })
//     }
//     //reset the input
//     $('#showName').val('')
//   })
// })


$(function() {
  $("#shows-search").click(function() {
    //default request is get
    /// default type is json
    //so we usually don't actually need to set these
    $.ajax({
      'url': 'https://api.tvmaze.com/search/shows?q=:',
      'type': 'get',
      'dataType': 'json'
    }).done(function(data) {

      //jQuery automatically parses the JSON for us
      $('#shows-search').text(data.cases)
    }).fail(function() {
      //sometimes your request will fail, you can deal with that here
      $("#shows-search").text('Whoops, try again')

    }).always(function() {
      // console.log('if you want to do something whether it fails or not, do it here')
    })
  })
})
