var arr = ["5", "+", "4", "-", "3", "÷", "2", "+", "7"];
var answer = 0;

while (arr.length > 1) {
	var x = parseFloat(arr.shift());
	var op = arr.shift();
	var y = parseFloat(arr.shift());

	switch(op) {
    		case "X":
    			// Do multiplication
    			answer = x * y;
    			break;
    		case "-":
    			// Do minus
    			answer = x - y;
    			break;
    		case "+":
    			// Do plus
    			answer = x + y;
    			break;
    		case "%":
    			// Do modulo
    			answer = x % y;
    			break;
    		case "÷":
    			// Do division
    			answer = x / y;
    			break;
    		default:
    			break;
    			// No operator so do nothing.
    	}
    arr.unshift(answer);

}



