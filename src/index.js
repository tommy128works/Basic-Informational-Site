var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  let filename = "src";

  if (q.pathname === "/") {
    filename = filename + "/index.html";
  } else {
    filename = filename + q.pathname + ".html";
  }

  fs.readFile(filename, function(err, data) {
    if (err) {
      return;
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  fs.readFile("src/404.html", function(err, data) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  
}).listen(8080);