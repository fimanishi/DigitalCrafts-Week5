function letterHistogram (text){
  var histogram = {};
  for(var i = 0; i < text.length; i++){
    if(!histogram[text[i]]){
      histogram[text[i]] = 1;
    }
    else{
      histogram[text[i]] += 1;
    }
  }
  return histogram;
}

function wordHistogram (text){
  var histogram = {};
  var regexExp = /(\b[\w]+\b)+/gi;
  var list = text.match(regexExp);
  for (var i = 0; i < list.length; i++){
    if(!histogram[list[i]]){
      histogram[list[i]] = 1;
    }
    else{
      histogram[list[i]] += 1;
    }
  }
  return histogram;
}

function topTwo (dict){
  var tempdict = dict;
  var top = [];
  var temp = 0;
  var key_temp = '';
  for(var i = 0; i < 2; i++){
    for(var attribute in dict){
      if (dict[attribute] > temp){
        temp = dict[attribute];
        key_temp = attribute;
      }
    }
    var t = {};
    t[key_temp] = temp;
    top.push(t);
    delete tempdict[key_temp];
    temp = 0;
  }
  return top;
}

function positiveNumbers(list){
  function temp (list) {
    return list > 0;
  }
  return list.filter(temp);
}

function evenNumbers(list){
  function temp (list) {
    return list % 2 === 0;
  }
  return list.filter(temp);
}

function squareNumbers(list){
  function temp(list){
    return list * list;
  }
  return list.map(temp);
}

function cities(list){
  function temp(list){
    return list['temperature'] < 70;
  }
  return list.filter(temp);
}

function cities2(list){
  function temp(list){
    return list['name'];
  }
  return list.map(temp);
}

function goodJob(list){
  function temp(list){
    console.log('Good Job,', list);
    return null;
  }
  list.map(temp);
}

function sort_alpha(list){
  return list.sort();
}

function sort_length(list){
  return list.sort(function (x,y){
    if(x.length > y.length) { return 1;}
    else if(x.length < y.length) {return -1;}
    return 0;
  });
}

function sort3(list){
  return list.sort(function (x,y){
    if(sumArray(x) > sumArray(y)) {return 1;}
    else if(sumArray(x) < sumArray(y)) {return -1}
    return 0;
  });
}

function call3Times (fun) {
  var fun = function () {console.log('Hello, world!')}
  fun();
  fun();
  fun();
}

function callNTimes (times, hello) {
  for(var i = 0; i < times; i++){
    hello();
  }
}


function sumArray(list){
  return list.reduce(function (x,y){
    return x+y;
  });
}

function acronym(list){
  return list.reduce(function (output, word){
    output+=word[0].toUpperCase();
    return output;
  },'')
}
