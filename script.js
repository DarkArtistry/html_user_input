$(document).ready(function () {
  var $form = $('form')
    // var $links = $('a')
    //
    // $links.on('click', function(e) {
    //   e.preventDefault()
    // })

  $form.on('submit', function (e) {
    e.preventDefault()

    var data = $(this).serializeArray()

    data.forEach(function (input) {
      console.log(input.value)

    // var inputArr =  data.map(function (input) {
    //     return input.value
    //     $('h1').text(inputArr.join(','))

        // var inputArr =  data.reduce(function (accu, next) {
        //     accu += ', ' + next.value
        //     return accu
        //   } ,'')
    })

  })
})
