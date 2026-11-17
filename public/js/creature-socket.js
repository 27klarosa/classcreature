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

  //feed
  

  socket.on('feed', function (payload) {
    console.log(payload.petId, " has been feed: ", payload.itemName);
  })

  /* play
  function play(itemName, itemValue, petId) {
    socket.emit('play', {
      item: itemName,
      itemValue: itemValue,
      petId: petId
    });
    time_stats.happiness = Math.min(100, time_stats.happiness + itemValue);
    time_stats.entertainment = Math.min(100, time_stats.entertainment + itemValue);
  } */

  socket.on('play', function (payload) {
    console.log("pet has been played with using " + playItem)
  })


  //train stats
  socket.on('train', function (payload) {
    console.log("pet has been trained with using " + playItem + ", gaining " + increasedTrainedStat)
  })

})();
