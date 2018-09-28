/***
 * @creater:wjiban
 * @create_time:18-9-11 15:42:51
 * @last_modify:wjiban
 * @modify_time:18-9-11 15:42:51
 * @line_count:3
 **/

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World - Node.js Work.');
  console.log(res);
}).listen(5656, '127.0.0.1');
console.log('Server running at http://127.0.0.1:5656/');


