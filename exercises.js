function hello(name){
  if (name){
    console.log('Hello, ' + name + '!');
  }
  else {
    console.log('Hello, World!');
  }
}

function madlib(name, subject){
  var string = name + "'s favorite subject is " + subject + '.';
  return string;
}

function tipAmount(amount, service){
  if(service === 'good'){
    return amount*0.2;
  }
  else if(service === 'fair'){
    return amount*0.15;
  }
  else if(service === 'bad'){
    return amount*0.1;
  }
  else{
    return null;
  }
}

function totalAmount(amount, service){
  return amount + tipAmount(amount, service);
}

function splitAmount(amount, service, people){
  return totalAmount(amount, service)/people;
}

function printNumbers(start, end){
  for (var i = start; i<= end; i++ ){
    console.log(i);
  }
}

function printSquare(size){
  for(var i = 0; i < size; i++){
    var string = '';
    for(var j = 0; j < size; j++){
      string += '*'
    }
    console.log(string);
  }
}

function printBox(width, height){
  for(var i = 0; i < height; i++){
    var string = '';
    for(var j = 0; j < width; j++){
      if(i===0 || i===height-1){
        string += '*';
      }
      else {
        if(j===0 || j===width-1){
          string += '*';
        }
        else{
          string += ' ';
        }
      }
    }
  console.log(string);
  }
}

function printBanner(text){
  var string = '';
  var string2 = '* ' + text + ' *';
  for(let i = 0; i < text.length + 4; i++){
    string += '*';
  }
  console.log(string);
  console.log(string2);
  console.log(string);
}

function factors(number){
  var factors = [number];
  for(var i = parseInt(number/2+1); i>0; i--){
    if(number%i === 0){
      factors.push(i);
    }
  }
  return factors;
}

function cipher(text, offset){
  var string_output = '';
  var char;
  for(let i = 0; i < text.length; i++){
    char = text.charCodeAt(i);
    if(char>=65 && char<=90){
      if((char+offset) > 90){
        char -= 26;
      }
      else if((char+offset) < 65){
        char += 26;
      }
      string_output += String.fromCharCode(char+offset);
    }
    else if(char>=97 && char<=122){
      if((char+offset) > 122){
        char -= 26;
      }
      else if((char+offset) < 97){
        char += 26;
      }
      string_output += String.fromCharCode(char+offset);
    }
    else{
      string_output += String.fromCharCode(char);
    }
  }
  return string_output;
}

function leetspeak(text){
  var string_output = '';
  var char;
  for(var i=0; i < text.length; i++){
    char = text[i].toLowerCase();
    if(char === 'a'){
      string_output += 4;
    }
    else if(char === 'e'){
      string_output += 3;
    }
    else if(char === 'g'){
      string_output += 6;
    }
    else if(char === 'i'){
      string_output += 1;
    }
    else if(char === 'o'){
      string_output += 0;
    }
    else if(char === 's'){
      string_output += 5;
    }
    else if(char === 't'){
      string_output += 7;
    }
    else{
      string_output += text[i];
    }
  }
  return string_output;
}

function longLongVowels(text){
  var previous = '';
  var string_output = '';
  for(var i = 0; i < text.length; i++){
    char = text[i].toLowerCase();
    if(char === previous.toLowerCase()){
      if(char === 'a'){
        string_output += (char + 'aaa');
      }
      else if(char === 'e'){
        string_output += (char + 'eee');
      }
      else if(char === 'i'){
        string_output += (char + 'iii');
      }
      else if(char === 'o'){
        string_output += (char + 'ooo');
      }
      else if(char === 'u'){
        string_output += (char + 'uuu');
      }
      else{
        string_output += text[i];
      }
    }
    else{
      string_output += text[i];
    }
    previous = text[i];
  }
  return string_output;
}

function sumTheNumbers(list){
  var sum = 0;
  list.forEach(function(item, index, array){
    sum += item;
  });
  return sum;
}

function positiveNumbers(list){
  var return_array = [];
  list.forEach(function(item, index, array){
    if(item > 0){
      return_array.push(item);
    }
  });
  return return_array;
}

function matrixAdd(matrix1, matrix2){
  if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length){
    return false;
  }
  var matrix_sum = [];
  for(let i = 0; i < matrix1.length; i++){
    var temp_row = [];
    for(let j = 0; j < matrix1[0].length; j++){
      temp_row.push(matrix1[i][j] + matrix2[i][j]);
    }
    matrix_sum.push(temp_row);
  }
  return matrix_sum;
}

function transposeMatrix(matrix){
  var transposed = [];
  for (var i = 0; i < matrix[0].length; i++){
    var temp_row = [];
    for (var j = 0; j < matrix.length; j++){
      temp_row.push(matrix[j][i]);
    }
    transposed.push(temp_row);
  }
  return transposed;
}

function multiplyRow(row1, row2){
  var value = 0;
  for(var i = 0; i < row1.length; i++){
    value += row1[i]*row2[i];
  }
  return value;
}

function matrixMultiply(matrix1, matrix2){
  if (matrix1[0].length !== matrix2.length){
    return false;
  }
  matrix2 = transposeMatrix(matrix2);
  matrix_return = [];
  for (var i = 0; i < matrix1.length; i++){
    var temp_row = [];
    for (var j = 0; j < matrix2.length; j++){
      temp_row.push(multiplyRow(matrix1[i], matrix2[j]))
    }
    matrix_return.push(temp_row);
  }
  return matrix_return;
}

function rockPaperScissors (player1, player2){
  if (player1 === player2){
    return 'draw';
  }
  else if((player1 === 'rock' && player2 === 'scissors') || (player1 === 'scissors' && player2 ==='paper') || (player1 === 'paper' && player2 === 'rock')){
    return 'player 1';
  }
  else{
    return 'player2';
  }
}

function ticTacToe (board){
  if(board.length !== 3 || board[0].length !== 3){
    return false;
  }
  for(let i = 0; i < board.length; i++){
    var previous = '';
    var count = 0;
    for(let j = 0; j < board.length; j++){
      if(board[i][j] === previous){
        count += 1;
      }
      previous = board[i][j];
    }
    if (count === 2){
      return previous;
    }
  }

  for(let i = 0; i < board.length; i++){
    var previous = '';
    var count = 0;
    for(let j = 0; j < board.length; j++){
      if(board[j][i] === previous){
        count += 1;
      }
      previous = board[j][i];
    }
    if (count === 2){
      return previous;
    }
  }


  var previous = '';
  var count = 0;
  for(let j = 0; j < board.length; j++){
    if(board[j][j] === previous){
      count += 1;
    }
    previous = board[j][j];
  }
  if (count === 2){
    return previous;
  }

  var previous = '';
  var count = 0;
  for(let j = board.length-1; j >= 0; j--){
    if(board[j][j] === previous){
      count += 1;
    }
    previous = board[j][j];
  }
  if (count === 2){
    return previous;
  }
  return null;
}
