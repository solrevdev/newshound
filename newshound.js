var express = require('express');
var app = express();

var feed = require('feed-read'), 
    http = require("http"),
    port = process.env.PORT || 5000, // downloaded the heroku toolbelt to deploy to heroku
    urls = [
        "http://feeds.bbci.co.uk/news/rss.xml",
        "http://news.sky.com/feeds/rss/home.xml"
    ];
    
var data = '';

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.sendfile('./public/index.htm');
});


app.post('/feeds', function(req, res) {
   console.log(req);
   res.set('Content-Type', 'text/html');

   for (var j = 0; j < urls.length; j++) {

        // fetch rss feed for the url:
        feed(urls[j], function(err, articles) {

            if (err) {
                throw err;
            }

            // iterate through the list of articles returned
            for (var i = 0; i < articles.length; i++) {

                var a = articles[i];
                var author = a.author || a.feed.name;

                console.log(a.title);

                // send to response
                data += "<h3>" + a.title + "</h3>";
                data += "<p><strong>" +author +" - " +a.published + "</strong> <br />\n";
                data += a.content+"</p>\n";

                
                res.send(new Buffer(data));
                //console.log("data:" + data);


                // check for end of articles and feeds
                if( i === articles.length-1 && j === urls.length-1) {
                    console.log("post request no more content " + data);
                    res.send("post request no more content " + data);
                } 
            } 
        }); 
    }
});


var server = app.listen(port, function() {
    console.log('HTTP Listening on port %d', server.address().port);
});