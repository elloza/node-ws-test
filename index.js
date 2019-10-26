const WebSocket = require('ws');

var HOST = location.origin.replace(/^http/, 'ws')

const wss = new WebSocket.Server({host:HOST, port: PORT });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});