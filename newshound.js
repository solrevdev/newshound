var express = require('express');
var app = express();

var feed = require('feed-read'), 
    http = require("http"),
    port = process.env.PORT || 5000, // downloaded the heroku toolbelt to deploy finished version to well heroki
    urls = [
        "http://feeds.bbci.co.uk/news/rss.xml",
        "http://news.sky.com/feeds/rss/home.xml"
    ]; // the feeds to display. next version will store in mongo and use mongoose


app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.sendfile('./public/index.htm');
});

app.post('/feeds', function(req, res) {
   console.log(req);
   console.log('req received');

   var data = '';

   for (var j = 0; j < urls.length; j++) {

        // fetch rss feed for the url:
        feed(urls[j], function(err, articles) {

            // iterate through the list of articles returned
            for (var i = 0; i < articles.length; i++) {

                // stream article title to client
                data += streamToClient(res, articles[i]); 

                // check for end of articles and feeds
                if( i === articles.length-1 && j === urls.length-1) {
                    return res.send(data);
                } // nope still more to process
            } 
        }); 
    } 

    //return res.send(data);
});


var server = app.listen(port, function() {
    console.log('HTTP Listening on port %d', server.address().port);
});


/*// next version will use express, bootstrap, angularjs, mustache etc, etc.
http.createServer(function (req, res) { 
    // send basic http headers to client
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Transfer-Encoding": "chunked"
    });

    // setup simple html page:
    res.write("<html>\n<head>\n<title>Newshound</title>\n</head>\n<body>");

    // iterate rss feeds
    for (var j = 0; j < urls.length; j++) {

        // fetch rss feed for the url:
        feed(urls[j], function(err, articles) {

            // iterate through the list of articles returned
            for (var i = 0; i < articles.length; i++) {

                // stream article title to client
                streamToClient(res, articles[i]); 

                // check for end of articles and feeds
                if( i === articles.length-1 && j === urls.length-1) {
                    res.end("</body>\n</html>"); // end http response
                } // nope still more to process
            } 
        }); 
    } 
}).listen(port);*/




function streamToClient(res, a) {


  var data = "";
  var author = a.author || a.feed.name;

  // send to response
  data += "<h3>"+a.title +"</h3>";
  data += "<p><strong>" +author +" - " +a.published +"</strong> <br />\n";
  data += a.content+"</p>\n";

  return data;
}