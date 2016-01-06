require('colorful').colorful()
require('./stack')
  //underline or not
var NORMAL = 0
  //()
var INPARE = 1
  //[]
var INBRACKET = 2
  //"
var INQUOTA = 3
var flag = 0;

/**
 *
 * Parse and hight different type of strings
 *
 */
module.exports = function(d) {
  var colorword = '';
  for (var i = 0; i < d.length; i++) {
    var type = gettype(getpair(d[i]));
    var data = d[i];
    switch (type) {
      case INPARE:
        data = data.to.italic.blue.color;
        break;
      case INBRACKET:
        colorword += data.to.underline.bold.green.color;
        continue;
        break;
      case INQUOTA:
        data = data.to.magenta.color;
        break;
    }
    if (flag) {
      data = data.to.underline;
    }
    colorword += data;
  };
  return colorword;
}

/**
 *
 * Get the type of the string
 *
 */
var gettype = function(c) {
  if (c == '(' || c == ')') {
    return INPARE;
  } else if (c == '[' || c == ']') {
    if (c == '[') {
      flag = 1;
    } else {
      flag = 0;
    }
    return INBRACKET;
  } else if (c == '\"') {
    return INQUOTA;
  } else {
    return NORMAL;
  }
}
