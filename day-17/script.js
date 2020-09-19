
plusbtn = document.getElementById('plus');
plusbtn.onclick = function(){
	var operator = document.getElementById('operator').value = '+';
};

minusbtn = document.getElementById('minus');
minusbtn.onclick = function(){
	var operator = document.getElementById('operator').value = '-';
};

multiplicationbtnbtn = document.getElementById('multiplicationbtn');
multiplicationbtn.onclick = function(){
	var operator = document.getElementById('operator').value = '*';
};

divisionbtn = document.getElementById('division');
divisionbtn.onclick = function(){
	var operator = document.getElementById('operator').value = '/';
};

remainderbtn = document.getElementById('remainder');
remainderbtn.onclick = function(){
	var operator = document.getElementById('operator').value = '%';
};




function myCalculator(operator) {
	var firstNumber   = Number(document.getElementById('firstNumber').value);
	var secondNumber  = Number(document.getElementById('secondNumber').value);

	switch(operator) {
		case '+' :
		var result = firstNumber+secondNumber;
		break;

		case '-' :
		var result = firstNumber-secondNumber;
		break;

		case'*' :
		var result = firstNumber*secondNumber;
		break;

		case'/' :
		var result = firstNumber/secondNumber;
		break;

		case'%' :

		var result = firstNumber%secondNumber;
		break;

	}

	return result;
}





 var plusbtn = document.getElementById('plus');
 plusbtn.onclick = function () {
    // function calling.
 	 var sum = myCalculator('+');
 var result = document.getElementById('result').value = sum;	
 };

 var minusbtn = document.getElementById('minus');
 plusbtn.onclick = function () {
    // function calling.
 	 var sum = myCalculator('-');
 var result = document.getElementById('result').value = sum;	
 };

 var multiplicationbtn = document.getElementById('multiplication');
 plusbtn.onclick = function () {
    // function calling.
 	 var sum = myCalculator('*');
 var result = document.getElementById('result').value = sum;	
 };

 var divisionbtn = document.getElementById('division');
 plusbtn.onclick = function () {
    // function calling.
 	 var sum = myCalculator('/');
 var result = document.getElementById('result').value = sum;	
 };

 var remainderbtn = document.getElementById('remainder');
 plusbtn.onclick = function(){
    // function calling.
 	 var sum = myCalculator('%');
 var result = document.getElementById('result').value = sum;	
 };

 var equal = document.getElementById('equal');
 equal.onclick = function () {
 	var operator = document.getElementById('operator').value;

    var result = myCalculator('operator');

    document.getElementById('result').value = result;
 };







/* var plusbtn = document.getElementById('plus');
 plusbtn.onclick = function () {
 	var firstNumber   = Number(document.getElementById('firstNumber').value);
 	var secondNumber  = Number(document.getElementById('secondNumber').value);

 	var sum = firstNumber+secondNumber;

 	document.getElementById('result').value = sum;
 };
 var minusbtn = document.getElementById('minus');
 minusbtn.onclick = function () {
 	var firstNumber   = Number(document.getElementById('firstNumber').value);
 	var secondNumber  = Number(document.getElementById('secondNumber').value);

 	var sum = firstNumber-secondNumber;

 	document.getElementById('result').value = sum;
 };

  var multiplicationbtn = document.getElementById('multiplication');
  multiplicationbtn.onclick = function (){
  	var firstNumber   = Number(document.getElementById('firstNumber').value);
  	var secondNumber  = Number(document.getElementById('secondNumber').value);

  	var sum = firstNumber*secondNumber;

  	document.getElementById('result').value = sum;
  };

   var divisionbtn = document.getElementById('division');
   divisionbtn.onclick = function() {
   	var firstNumber   = Number(document.getElementById('firstNumber').value);
   	var secondNumber  = Number(document.getElementById('secondNumber').value);

   	var sum = firstNumber/secondNumber;

   	document.getElementById('result').value = sum;
   };

     var remainderbtn = document.getElementById('remainder');
     remainderbtn.onclick = function() {
     	var firstNumber   = Number(document.getElementById('firstNumber').value);
     	var secondNumber  = Number(document.getElementById('secondNumber').value);

     	var sum = firstNumber%secondNumber;
     };*/