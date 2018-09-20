$(function(){
  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    console.log(input);
    $.ajax({
      type: 'GET',
      url: '/users/index',
      data: { keyword: input },
      dataType: 'json'
    })
      .done(function(){

      })
      .fail(function(){

      })
      .always(function(){

      });
  });
});
