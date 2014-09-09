require('colorful').colorful()
//是否underline
var flag = 0;
module.exports = function  (d) {
  var colorword = '';
  for (var i = 0; i < d.length; i++) {
    var color = getcolor(getpair(d[i]));
    var data = d[i];
    if(color == 'italic' ){
      data = data.to.italic.blue.color;
    }else if(color == 'green'){
      colorword += data.to.underline.bold.green.color;
      continue;
    }else if(color == 'magenta'){
      data = data.to.magenta.color;
    }
    if(flag){
      data = data.to.underline;
    }
    colorword += data;
  };
  return colorword;
}

var stack = '';

var isstackempty = function  () {
  return stack == '';
}

var getpair = function (c){
  if((c == ')'&&stack.slice(-1) == '(')||(c == ']' && stack.slice(-1) == '[')||(c == stack.slice(-1) && c == '\"')){
    stack = stack.slice(0, -1);
    return c;
  }else if(c == '[' || c == '(' || c == '\"'){
    stack += c;
  }
  if(!isstackempty()){
    return stack.slice(-1);
  }
  return '';
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

