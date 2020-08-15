var socket = new WebSocket('ws://localhost:8080/ws');

let connect = cb => {
  console.log('Attempting Connection...');

  socket.onopen = () => {
    console.log('Successfully Connect');
  };

  socket.onmessage = (msg) => {
    console.log('msg', msg);
    cb(msg);
    // console.log('cb', cb);
  };

  socket.onclose = (event) => {
    console.log('Socket Closed Connection: ', event);
  };

  socket.onerror = (error) => {
    console.error('Socket Error: ', error);
  };
};

let sendMsg = (msg) => {
  console.log('Sending msg ...: ', msg);
  socket.send(msg);
};

export { connect, sendMsg };
