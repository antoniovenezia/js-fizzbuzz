for (var i = 1; i <= 100; i++) {
    
    if (i % 15 == 0) {
        document.getElementById("game").innerHTML += ("FizzBuzz" + "</br>");
    } else if(i % 3 == 0) {
        document.getElementById("game").innerHTML += ("Fizz" + "</br>") ;
    } else if (i % 5 == 0) {
        document.getElementById("game").innerHTML += ("Buzz" + "</br>") ;
    } else {
        document.getElementById("game").innerHTML += (i + "</br>");
    }
}

