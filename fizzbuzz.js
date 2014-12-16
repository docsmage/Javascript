// Various solutions to FizzBuzz in Javascript. Working through these helped me gain a better grasp of this language.

// NOTE: comment out all but one of these to see it work!

// 1. FizzBuzz, the cleanest, most Ruby-esque version

var FizzBuzz = function(x) {
for (var i=1; i <= x; i++)
  {
      if (i % 15 == 0)
          console.log("FizzBuzz");
      else if (i % 3 == 0)
          console.log("Fizz");
      else if (i % 5 == 0)
          console.log("Buzz");
      else
          console.log(i);
  }
}

FizzBuzz(15);

// 2. From http://stackoverflow.com/questions/16620665/fizzbuzz-programdetails-given-in-javascript

function FizzBuzz(aTarget) {
    for (var i = 1; i <= aTarget; i++) {
        var result = "";
        if (i%3 === 0) result += "Fizz";
        if (i%5 === 0) result += "Buzz";
        if (result.length ===0) result = i;

        console.log(result);
    }
}

FizzBuzz(10);

// 3. From same StackOverflow page, because one-liners are cool

for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)

// 4. Interesting data-driven approach

var data = {
    Fizz:3,
    Buzz:5
};

for (var i=1;i<=100;i++) {
    var value = '';
    for (var k in data) {
        value += i%data[k]?'':k;
    }
    console.log(value?value:i);
}