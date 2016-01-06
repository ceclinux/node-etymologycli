var request = require('request');
var PREURL = 'http://www.etymonline.com/index.php?term='
var AFTERURL = '&allowed_in_frame=0'
var jsdom = require("jsdom");
var printcolor = require('./printcolor');

module.exports = function(word) {
  //The URL(www.etymonline.com/index.php?term=word&allowed_in_frame=0) allows single word presentation
  jsdom.env(
    PREURL + word + AFTERURL, ["http://code.jquery.com/jquery.min.js"],
    function(errors, window) {
      console.log(printcolor(window.$("dd").eq(0).text()));
    }
  );
}
