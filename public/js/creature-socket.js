/* Example Socket.IO client. Identity and roles must never be sent by this script. */
(function () {
  if (!window.io) {
    return;
  }
  socket = window.io('/', { transports: ['websocket'] });

  socket.on('connect', function () {
    socket.emit('ping', { message: 'hello' });
  });
  socket.on('pong', function (payload) {
    console.info('pong', payload);
  });

  //might put under use item to sort it
  socket.on('feed', function () {
    console.log("pet has been feed ")
  })

  socket.on('play', function (play) {
    console.log("pet has been played with using " + playItem)
  })

  socket.on('play', function (train) {
    console.log("pet has been trained with using " + playItem + ", gaining " + increasedTrainedStat)
  })

})();
