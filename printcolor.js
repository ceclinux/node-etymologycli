require('colorful').colorful()
//var tomagenta = function (data) {
//var dataarray = data.split(/"/);
//var colordata = '';
//for (var i = 0; i < dataarray.length; i++) {
//if (i%2==0) {
//colordata += dataarray[i];
//}else{
//colordata += (("\"" + dataarray[i] + "\"").to.magenta.color)
//}
//};
//return colordata;
//}

//module.exports = function(data) {
//var bluedata = '';
//var dataarray = data.split(/\(|\)/);
//for (var i = 0; i < dataarray.length; i++) {
//if (i%2==0) {
//bluedata += tomagenta(dataarray[i]);
//}else{
//bluedata += ((tomagenta("(" + dataarray[i] + ")")).to.italic.color)
//}
//};
//return bluedata;
//}
var flag = 0;
module.exports = function  (data) {
  var d = '';
  for (var i = 0; i < data.length; i++) {
    var color = getcolor(getpar(data[i]));
    if(color == 'italic' ){
      if (flag) {
        d += data[i].to.italic.underline.blue.color;
      }else{
        d += data[i].to.italic.blue.color;
      }
    }else if(color == 'green'){
      d += data[i].to.underline.bold.green.color;
    }else if(color == 'magenta'){
      if (flag) {
        d += data[i].to.underline.magenta.color;
      }else{
        d += data[i].to.magenta.color;
      }
    }else{
      d += data[i];
    }
  };
  return d;
}

var stack = '';

var isstackempty = function  () {
  return stack == '';
}

var getpar = function (c){
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

