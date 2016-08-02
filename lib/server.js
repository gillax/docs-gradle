var vertx = require('vertx');
var container = require('vertx/container');
var logger = container.logger;

var config = container.config;
logger.debug("===== config is below:");
logger.debug(JSON.stringify(config));

var port = (config.http_port) ? config.http_port : 8080;
var webapp = (config.webapp) ? config.webapp : 'src/main/webapp';

vertx.createHttpServer().requestHandler(function(req) {
  logger.debug("URI:" + req.uri());

  var file = "";
  if (req.path() == "/") {
    file = "index.html";
  } else if (req.path().indexOf("..") == -1) {
    file = req.path();
  }
  if (req.path().indexOf(".pdf") != -1) {
    req.response.headers().set("Content-Type", "application/pdf");
	} else if (req.path().indexOf(".css") != -1) {
    req.response.headers().set("Content-Type", "text/css");
  } else {
    req.response.headers().set("Content-Type", "text/html; charset=UTF-8");
  }
  req.response.sendFile(webapp + '/' + file);
}).listen(port);

logger.info("vert.x STARTING!! port=" + port + " webapp=" + webapp);
