$(document).ready(function(){

    $("#display").text("0");
    var number = "";
    var operator = "";
    var sumString = "";
    var wipe = false;
    var opCount = 0;

    function lastCharAnOperator() {
        if (sumString[sumString.length-1] == "*" || sumString[sumString.length-1] == "/" || sumString[sumString.length-1] == "%" || sumString[sumString.length-1] == "+" || sumString[sumString.length-1] == "-") {
            return true;
        }
    }

    function largeNumToExponential(n) {
        if (n.toString().length > 13) {
            return n.toExponential(8);
        } else {
            return n;
        }
    }

  // decimal listener
    $("#point").click(function(){
        if (number.indexOf(".") === -1) {
            // no previous decimals, append
            number += "."
            $("#display").text(number);
        }
    });

    // Number listeners
    $(".numbers").not("#clear, #clearall, #point").click(function() {
        if (wipe) {
            number = "";
            $("#display").text("0");
            wipe = false;
        }

        number += $(this).html();
        $("#display").text(number);
    });

    // Operator listeners
    $(".operators").click(function() {
        opCount += 1;
        wipe = false;
        operator = $(this).text();
        sumString += number;
        number = "";
        // intermediate calc
        if (opCount > 1) {
            var answer = eval(sumString);
            answer = largeNumToExponential(answer);
            $("#display").text(answer);
        }
        // if last item in item in sumString is an operator, replace with new opp
        if (lastCharAnOperator()) {
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
            sumString = "";
        }
    });

    // Equals listener
    $("#equals").click(function(){
        opCount = 0;
        sumString += number;
        if (lastCharAnOperator()) {
            sumString = sumString.slice(0, -1);
        }
        var answer = eval(sumString);
        // if answer.length > 13
        // exponent

        answer = largeNumToExponential(answer);

        console.log(answer);
        $("#display").text(answer);
        // handle any division by zero
        if (answer == "Infinity") {
            $("#display").text("Error");
        }
        operator = "";
        sumString = "";
        number = answer;
        wipe = true;
    });

});