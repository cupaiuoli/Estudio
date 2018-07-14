console.log('Chat fullstack')

$(function () {
  const socket = io();

  // Obtaining DOM elements from the Chat container
  const $messageForm = $('#message-form');
  const $messageBox = $('#message');
  const $chat = $('#chat');

// Obtaining DOM elements from the Nick form
  const $nickForm = $('#nickForm');
  const $nickError = $('#nickError');
  const $nickname = $('#nickname');

  const $usersBox = $('#usernames');

  $nickForm.submit(ev => {
    console.log('..sending Nickname');
    ev.preventDefault();
    socket.emit('new user', $nickname.val(), callbackData => {
      if (callbackData) {
        $('#nickWrap').hide();
        $('#contentWrap').show();
      } else {
        $nickError.html(`
          <div class="alert alert-danger">
          That username already exist
          </div>
        `);
      }
      $nickname.val('');
    });
  });

  // Events
  $messageForm.submit(ev => {
    ev.preventDefault(); // Don't refresh the page, prevent the default behavior
    console.log("Sending data: " + $messageBox.val());
    socket.emit("send message", $messageBox.val());
    $messageBox.val('');
  });

  socket.on('new message', data => {
    $chat.append('<b>' + data.nick + "</b>: " + data.msg + '<br/>');
  });

  socket.on('usernames', data => {
    let html = '';
    for (let i = 0; i < data.length; i++) {
      html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`;
    }
    $usersBox.html(html);
  });
});
