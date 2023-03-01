//Using union types allows us to receive any type
//of value in an expected result

const fruitsVegetables = (fruits: number | string, vegetables:number | string, quantity:number) => {
  let result;
  if (typeof(fruits) === "number" && typeof(vegetables) === "number" && typeof(quantity) === "number") {
    result = fruits + vegetables + quantity;
  } else {
    result = fruits.toString() + vegetables.toString() + quantity.toString()
  }
  return result;
};

//const whatIlike = fruitsVegetables("bananas","tomatoes", 8)

console.log(fruitsVegetables("bananas ","tomatoes ", 8))