$(function () {
  $('.btn').click(function (event) {
    event.preventDefault();
    $.ajax({
      url: '/receive',
      type: 'get',
      dataType: 'json',
      data: {
        username: $('#exampleInputEmail1').val()
      },
      success: function (data) {
        console.log(data);
      },
      error: function () {
        console.log('error');
      }
    })
  })
})