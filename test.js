//Using union types allows us to receive any type
//of value in an expected result
var fruitsVegetables = function (fruits, vegetables, quantity) {
    var result;
    if (typeof (fruits) === "number" && typeof (vegetables) === "number") {
        result = fruits + vegetables + quantity;
    }
    else {
        result = fruits.toString() + vegetables.toString() + quantity;
    }
    return result;
};
var whatIlike = fruitsVegetables("Banana", "Tomatoes", 8);
console.log(whatIlike);
var fruits = ["Bananas ", "Mangoes ", "Pears "];
var vegetables = ["Tomatoes", "Potatoes", "Broccoli"];
var testing = function (fruits, vegetables, quantity) {
    var result;
    if (typeof (fruits) === "number" && typeof (vegetables) === "number") {
        result = fruits + vegetables + quantity;
    }
    else {
        result = fruits.toString() + vegetables.toString() + quantity;
    }
    return result;
};
console.log(testing(fruits, vegetables, 8));
