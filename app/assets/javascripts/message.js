$(document).on('turbolinks:load', function(){
  $(function(){
    function buildHTML(message){
      var html = `<div class="main-messages-message" data-message-id = ${ message.id } data-group-id = ${ message.group_id }>
                    <div class="main-messages-message-user-name">${ message.user_name }</div>
                    <div class="main-messages-message-created-at">${ message.created_at }</div>
                    <div class="main-messages-message-body">
                      ${ message.body }
                    </div>
                    <img class="message-image" src="${message.image}"
                  </div>`
      return html;
    }
    function alertHTML(){
      var html = `<div class="class">メッセージを入力してください。</div>`
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
          $('.main-messages').animate({scrollTop: $('.main-messages')[0].scrollHeight}, 'fast');
        })
        .fail(function(){
          var html = alertHTML();
          $('.notification').append(html);
          $('.notification').fadeIn("slow");
          setTimeout(function(){
            $('.notification').fadeOut("slow");
            setTimeout(function(){
              $('.class').remove();
            }, 2000);
          }, 2000);
        })
        .always(function(){
          $('.main-create-send').prop("disabled", false);
          $('.alert').remove();
        });
    });

    $(function(){
      setInterval(update, 4000);
    });

    function update(){
      var last_id = $('.main-messages-message:last').data("message-id");
      var group_id = $('.main-messages-message:last').data("group-id");
      var a = 1;
      $.ajax({
        url: "/groups/" + String(group_id) + "/messages",
        type: 'GET',
        data: {last_id: last_id},
        dataType: 'json',
      })
        .always(function(data){
          if(data.length > 0){
            data.forEach(function(data){
              var html = buildHTML(data);
              $('.main-messages').append(html);
              $('.main-messages').animate({scrollTop: $('.main-messages')[0].scrollHeight}, 'fast');
            });
          }
        });
    }
  });
});

