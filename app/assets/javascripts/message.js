$(function(){
  function buildHTML(message){
    var html = `<div class="main-messages-message">
                  <div class="main-messages-message-user-name">${ message.user_name }</div>
                  <div class="main-messages-message-created-at">${ message.created_at }</div>
                  <div class="main-messages-message-body">
                    ${ message.body }
                  </div>
                  <img class="message-image" src="${message.image}"
                </div>`
    return html;
  }
  function alertHTML(message){
    var html = `<div class="main-messages-message">
                  <div class="main-messages-message-user-name">${ message.user_name }</div>
                  <div class="main-messages-message-created-at">${ message.created_at }</div>
                  <div class="main-messages-message-body">
                    ${ message.body }
                  </div>
                  <img class="message-image" src="${message.image}"
                </div>`
    return html;
  }
  $('.message-form-for').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.main-messages').append(html);
        $('.main-create-input').val('');
        $('.image-file').val('');
        $('.main-create-send').prop("disabled", false);
        $('.main-messages').animate({scrollTop: $('.main-messages')[0].scrollHeight}, 'fast');
      })
      .fail(function() {
        alert('メッセージの送信に失敗しました');
      });
  });
});
