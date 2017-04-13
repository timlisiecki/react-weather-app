var names = ["Luke", "Leia", "Han"];

names.forEach(function(name) {
    console.log("forEach", name);
});



// Arrow function - used in place of anonymous functions
names.forEach((name) => {
    console.log("arrowFunc", name);
});
// same as statement above, but in a single line
names.forEach((name) => console.log(name));

var returnMe = (name) => name + "!";
console.log(returnMe("Tim"));

var person = {
    name: "Tim",
    greet: function() {
        names.forEach((name) => {
            console.log(this.name + " says hi to " + name);
        });
    }
}
person.greet();

// Challenge Area - convert the satement below into both an arrow func expression and statement
function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) => a + b;

console.log(addStatement(1, 3));
console.log(addExpression(9, 0));

