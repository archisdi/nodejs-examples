// function statement

function greet() {
    console.log('Hello !');
}

function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function () {
    console.log('Hiiii');
};

logGreeting(greetMe);

// function on the fly
logGreeting(function () {
    console.log('Im Pickle Riiiick');
});