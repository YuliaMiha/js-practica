
/*function greet(name) {
  return `Ласкаво просимо ${name}.`;
}
console.log(greet("Mango")); // Ласкаво просимо Манго.
console.log(greet); //тіло ф-ції ƒ greet() { return `Ласкаво просимо ${name}.`;} 
*/

//щоб у змінній result був результат виконання функції makePizza,
// а у змінній pointer було посилання на функцію makePizza

/*function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
const result = makePizza(); 
const pointer = makePizza;
console.log(result);  //"Your pizza is being prepared, please wait."
console.log(pointer); //ƒ makePizza() { return "Your pizza is being prepared, please wait.";}
*/


//вивести повідомлення з імям в строці
/*function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
function makeMessage(pizzaName, callback ) {
  return callback(pizzaName);
}
console.log(makeMessage("Royal Grand", makePizza));//Pizza Royal Grand is being prepared, please wait...
console.log(makeMessage("Ultracheese", deliverPizza));//Delivering Ultracheese pizza.
*/



// розраховує загальну суму його елементів in array
/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
    orderedItems.forEach(value => { totalPrice += value; });
  return totalPrice;
}
calculateTotalPrice([12, 85, 37, 4]) // 138*/


// новий масив спільних чисел
/*function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
 firstArray.forEach(function(number){
  if(secondArray.includes(number)){
      commonElements.push(number);
      console.log(commonElements);//[1, 2]
  }
})
  return commonElements;
  // Change code above this line
}
getCommonElements([1, 2, 3], [2, 1, 17, 19]); //[1, 2]
*/



//функції calculateTotalPrice() як стрілочна
/*const calculateTotalPrice = (quantity, pricePerItem) =>
quantity * pricePerItem;
*/

//

/*const calculateTotalPrice = orderedItems => {
    let totalPrice = 0;
    orderedItems.forEach(item => {
        totalPrice += item;
        console.log(totalPrice);
})
    return totalPrice;
}
calculateTotalPrice([12, 85, 37, 4])*/

//ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0 - створення нового масиву з чисел > value
/*
const  filterArray = (numbers, value) => {
    const filteredNumbers = [];
    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });
 return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
*/

//ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// Change code below this line

/*const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
      commonElements.push(element);
    }
    })
     return commonElements;
}
console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
*/

// вивести новий масив з парні числа множемо на value інші записуюються просто 
/*function changeEven(numbers, value) {
  
    const newArray = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            newArray.push(number += value);
           
    }else{
            newArray.push(number);
           
    }
    })
     console.log(newArray);
    return newArray;
}
changeEven([1, 2, 3, 4, 5], 10);*/