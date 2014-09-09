  var stack = '';

 isstackempty = function  () {
    return stack == '';
  }

 pop = function  () {
    var c = top();
    stack = stack.slice(0, -1);
    return c;
  }
 top = function  () {
    return stack.slice(-1);
  }
 push = function  (c) {
    stack += c;
  }

 getpair = function (c){
    if((c == ')'&&top() == '(')||(c == ']' && top() == '[')||(c == top() && c == '\"')){
      pop();
      return c;
    }else if(c == '[' || c == '(' || c == '\"'){
      push(c);
    }
    if(!isstackempty()){
      return top();
    }
    return '';
  }

