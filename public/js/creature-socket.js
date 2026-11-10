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

  //might put under a useItem later, but for now just testing the socket 

  function feed(itemName, itemValue, petId) {
    socket.emit('feed', {
      item: itemName,
      itemValue: itemValue,
      petId: petId
    });
    time_stats.hunger = Math.min(100, time_stats.hunger + itemValue);
  }

  socket.on('feed', function (payload) {
    console.log(payload.petId, " has been feed: ", payload.itemName);


  })






  socket.on('play', function (payload) {
    console.log("pet has been played with using " + playItem)
  })

  socket.on('train', function (payload) {
    console.log("pet has been trained with using " + playItem + ", gaining " + increasedTrainedStat)
  })

})();
