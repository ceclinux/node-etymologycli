require('colorful').colorful()
require('./stack')
//是否underline
var flag = 0;
module.exports = function  (d) {
  var colorword = '';
  for (var i = 0; i < d.length; i++) {
    var color = getcolor(getpair(d[i]));
    var data = d[i];
    switch(color){
      case 'italic':
        data = data.to.italic.blue.color;
      break;
      case 'green':
        colorword += data.to.underline.bold.green.color;
      continue;
      break;
      case 'magenta':
        data = data.to.magenta.color;
      break;
    }
    if(flag){
      data = data.to.underline;
    }
    colorword += data;
  };
  return colorword;
}

var getcolor = function  (c) {
  if(c == '(' || c== ')'){
    return "italic";
  }else if(c == '[' || c == ']'){
    if( c == '['){
      flag = 1;
    }else{
      flag = 0;
    }
    return "green";
  }else if(c == '\"'){
    return "magenta";
  }else{
    return "white";
  }
}

