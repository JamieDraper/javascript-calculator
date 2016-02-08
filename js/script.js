$(document).ready(function(){


	$("#display").text("0");
	var number = "";
	var operator = "";
    var sumString = "";

	// Number listeners
	$(".numbers").not("#clear, #clearall").click(function() {
		number += $(this).html();
		$("#display").text(number);

	});
	// Operator listeners
	$(".operators").click(function() {
		operator = $(this).text();
        sumString += number;
        number = "";
        // if last item in item in sumString is an operator, replace with new one
        if (sumString[sumString.length-1] == "*" || sumString[sumString.length-1] == "/" || sumString[sumString.length-1] == "%" || sumString[sumString.length-1] == "+" || sumString[sumString.length-1] == "-") {
            sumString = sumString.slice(0, -1);
            sumString += operator;
        } else {
            sumString += operator;
        }

	});
	// Clear and clearall listeners
	$("#clear,#clearall").click(function(){
		number = "";
		operator = "";
        $("#display").text("0");
		if ($(this).attr("id") === "clearall") {
            sumString = "0";
		}
    });

    // Equal listener
    $("#equals").click(function(){
        sumString += number;
        // if last item is a char
    	var answer = eval(sumString);
    	$("#display").text(answer);
    	operator = "";
        sumString = "";
        number = answer;
    });

});

