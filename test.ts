//Using union types allows us to receive any type
//of value in an expected result

const fruitsVegetables = (fruits: number | string, vegetables:number | string, quantity:number) => {
  let result;
  if (typeof(fruits) === "number" && typeof(vegetables) === "number") {
    result = fruits + vegetables + quantity;
  } else {
    result = fruits.toString() + vegetables.toString() + quantity
  }
  return result;
};

const whatIlike = fruitsVegetables("Banana", "Tomatoes", 8)

console.log(whatIlike)


const fruits: string[] = ["Bananas ", "Mangoes ", "Pears "]
const vegetables: string[] = ["Tomatoes", "Potatoes", "Broccoli"]

const testing = (fruits: string[], vegetables: string[], quantity:number) => {
    let result;
    if (typeof(fruits) === "number" && typeof(vegetables) === "number") {
        result = fruits + vegetables + quantity;
      } else {
        result = fruits.toString() + vegetables.toString() + quantity
      }
      return result;
  };

  console.log(testing(fruits, vegetables, 8))