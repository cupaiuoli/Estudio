console.log('Chat fullstack')

$(function () {
  const socket = io();

  // Obtaining DOM elements from the interface
  const $messageForm = $('#message-form');
  const $messageBox = $('#message');
  const $chat = $('#chat');

  // Events
  $messageForm.submit(e => {
    e.preventDefault(); // Don't refresh the page, prevent the default behavior
    console.log("Sending data: " + $messageBox.val());
    socket.emit("send message", $messageBox.val());
     $messageBox.val('');
  })

  socket.on('new message', message => {
    $chat.append(message + '<br/>');
  })
})
